Setup and Execution of Server Repo
===

## Project Structure Overview

```sh
└── project-server
    ├── load-db
    │   └── drop-tables.js
    │   └── create-tables.js
    │   └── seed-data.js
    │   └── books.json
    ├── .env
    ├── .eslintrc.json
    ├── .gitignore
    ├── db-client.js
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── server.js
```

## Clone from git

`git clone <repo>` your repo and `cd <repo>` into it.

## Configuration

1. `.eslintrc.json`
1. `.gitignore` (make sure you have `node_modules` and `.env`!)
1. `package.json` via:
    ```sh
    > npm init
    ```
    (follow prompts!)


## Dev Dependencies

```sh
> npm i eslint nodemon -D
```

(you may want to restart vscode)

## Dependencies

```sh
> npm i pg express dotenv morgan cors
```

## Server Environment Variables

1. make sure `.env` is included in your `.gitignore`!
1. Create an `.env` file at the root of the server project
    1. **Not** JavaScript, use `KEY=value`:
    ```sh
    PORT=3000
    DATABASE_URL=postgres://localhost:5432/<database_name>
    ```

## Database

### Connecting

Create a `db-client.js` file at the root of the server project that:

1. loads environment variables (if any) from an `.env` using `require('dotenv').config();`
1. set connection string to `process.env.DATABASE_URL` or a fallback connection string if missing
1. require and creates a `pg` `Client` instance passing in the `DATABASE_URL`
1. call `connect()`
1. register an `client.on('error', err => { /*...*/ });` event listener that will log db errors
1. Use `module.exports = client;` to export the client
1. Test via `node db-client.js` and check that you don't get any errors!

### Database Load Scripts

#### Create Database

Before writing these scripts, open up `> psql` and create your 
local database via `CREATE DATABASE <name-of-db>`.

#### Script Files

Create the following scripts in `load-db` as you design you database:

1. `drop-tables.js` - drops all your tables
1. `create-tables.js` - creates tables
1. `seed-data.js` - loads any seed data. You can create multiple files if needed

Basic structure of each file:

```js
'use strict';

const client = require('../db-client');

client.query(`
  <SQL GOES HERE>
`)
    .then(
        () => console.log('db task successful'),
        err => console.error(err)
    )
    .then(() => client.end());
```

See class example for loading seed data with requiring `.json` file and `Promise.all`.

#### npm scripts

Once your scripts are working, add them to the `package.json`. You can add combinatorial scripts as well:

```json
"scripts": {
    "drop-tables": "node load-db/drop-tables.js",
    "create-tables": "node load-db/create-tables.js",
    "redo-tables": "npm run drop-tables && npm run create-tables",
    "seed-data": "node load-db/seed-data.js",
    "db-load-all": "npm run redo-tables && npm run seed-data"
},
```

## Web Server

Create `server.js` for defining and running your express server.

### Environment Variables

1. loads environment variables (if any) from an `.env` using `require('dotenv').config();`
1. Set the server port, providing a fallback, via: `const PORT = process.env.PORT || 3000;`

### Create Express App

1. Require `express`, `morgan`, and `cors`
1. Create an app using `express`
1. Use `app.use` for the following middleware (in this order):
    - `cors()` - allows Cross-Origin requests
    - `morgan('dev')` - logging of routes
    - `express.json()` - parse `json` bodies
    - `express.urlencoded({ extended: true })` - parse form encoded bodies
1. Leave some room for your routes :)
1. At the end of the file, start the server by calling `listen` on `app`

### Add scripts

Add scripts for starting, and starting in watch mode:

```json
"scripts": {
    //other scripts...
    "start": "node server.js",
    "watch": "nodemon server.js"
},
```

### Add Temporary Route for Testing

After the express app setup, but before listen, add a test route:

```js
app.get('/test', (request, response) => {
    response.send('Hello Test Route');
});
```

Make sure your server runs locally! Then you can remove the test routes

### Add Data Routes

Before the routes, require your db-client. Notice relative path is different than in `load-db` scripts:

```js
const client = require('./db-client');
```

Basic route structure:

```js
app.get('/todos', (request, response) => {
    client.query(`
        SELECT id, task, completed FROM todos;
    `)
        .then(result => response.send(result.rows))
        .catch(err => {
            console.error(err);
            response.sendStatus(500);
        });
});
```

## Deploy

### One-time setup

You need to have the heroku cli tools installed.

#### Create App

Create the heroku app from the root of your repo:

```sh
> heroku create alchemy-bc2-todo
```

Verify that the remote has been added:

```sh
> git remote -v
heroku  https://git.heroku.com/alchemy-bc2-todo.git (fetch)
heroku  https://git.heroku.com/alchemy-bc2-todo.git (push)origin  https://github.com/alchemy-bc2-todo/todo-server.git (fetch)origin  https://github.com/alchemy-bc2-todo/todo-server.git (push)
```

#### Push Master

Make sure all changes are committed on master, then deploy FTW!

```sh
> git push heroku master
```

1. Check the logs:

```sh
> heroku logs --tail
```

No database! We can fix that!

#### Add Database

##### Add to Project

Use the heroku cli to add a database to your app:

```sh
> heroku addons:create heroku-postgresql:hobby-dev
> heroku config
=== alchemy-bc2-todo Config Vars
DATABASE_URL: <YOUR_NEW_DATABASE_URL>
> heroku ps:restart
```

_Carefully_ (no extra spaces or characters) copy your `DATABASE_URL`

##### Run DB Script against production

Comment out your `DATABASE_URL` to `.env` using '#', copy the line
and include your production url instead, also add a setting for `PGSSLMODE=require`:

```sh
PORT=3000
#DATABASE_URL=postgres://localhost:5432/todo
DATABASE_URL=<your heroku DATABASE_URL>
PGSSLMODE=require
```

Run your npm script to load all data!

```sh
> npm run db-load-all
```

When complete, change your local `.env` by commenting out unused lines.

Delete your production `DATABASE_URL`!

```sh
PORT=3000
DATABASE_URL=postgres://localhost:5432/todo
#DATABASE_URL=
#PGSSLMODE=require
```

##### Restart Heroku

```sh
> heroku pg:restart
```

### Pushing Changes

When you're ready to update production server:

1. Commit to master
1. Push to heroku
    ```sh
    > git push heroku master
    ```
1. Check the logs:
    ```sh
    > heroku logs --tail
    ```







