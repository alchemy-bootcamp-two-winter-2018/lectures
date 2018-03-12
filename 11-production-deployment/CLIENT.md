Setup and Execution of Client Repo
===

## Project Structure Overview

```sh
├── project-client
│   ├── scripts
│   │   ├── models
│   │   │   └── thing1.js
│   │   │   └── thing2.js
│   │   └── views
│   │       └── <thing1>-view.js
│   │       └── <thing2>-view.js
│   └── styles
│       ├── base.css
│       ├── fonts
│       │   ├── icomoon.eot
│       │   ├── icomoon.svg
│       │   ├── icomoon.ttf
│       │   └── icomoon.woff
│       ├── icons.css
│       ├── layout.css
│       ├── modules.css
│       └── reset.css
|   ├── .eslintrc.json
|   ├── .gitignore
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
|   ├── README.md
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

Our client project does not have any `npm` dependencies.

## Templates

We need to use `<script id="id" type="text/handlebars">` to use more advanced handlebar templates!

## Add Models

Add a file for each model. Basic structure:

```js
'use strict';

const API_URL = 'http://localhost:3000';

(function (module) {

    const template = Handlebars.compile($('#todo-template').html());
    
    function Todo(data) {
        Object.keys(data).forEach(key => this[key] = data[key]);
    }
    
    Todo.prototype.toHtml = function() {
        return template(this);
    };

    // Define "instance" data methods
    Todo.prototype.insert = function(callback) {
        $.post(`${API_URL}/todos`, {
            task: this.task
        })
            .then(data => {
                Object.keys(data).forEach(key => this[key] = data[key]);
                if(callback) callback();
            });
    };
    
    Todo.all = [];
    
    Todo.fetchAll = function(callback) {
        $.getJSON(`${API_URL}/todos`)
            .then(data => {
                Todo.all = data.map(each => new Todo(each));
                if(callback) callback();
            })
            .catch(console.log);
    };

    module.Todo = Todo;

})(window.app || (window.app = {}));
```

## Add Views

Follow pattern of:

- `init<Page>` for setup
- `load<Models>` for loading the ready models into the DOM

Don't forget to init from `index.html`!

## Deploy to gh-pages

### Check links in index.html

Make sure that the css and js links are relative, meaning no leading `/`. This is critical
for the client to be served correctly from `gh-pages`

### Change API_URL

Somewhat of a hack for now, change the API_URL to point to production server:

```js
// const API_URL = 'http://localhost:3000';
const API_URL = 'https://alchemy-bc2-todo.herokuapp.com';
```

### Configure Gh-pages 

1. Turn on gh-pages in client repo `Settings` tab (scroll down). Choose `master` then save.
1. Push client repo to master

## Profit!

Navigate to `<your-org-name>.github.io/<your-client-repo-name>`



