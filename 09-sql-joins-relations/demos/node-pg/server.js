'use strict';

const pg = require('pg'); 
// pg is the npm module that allows us to send a query from our server to our database
const fs = require('fs'); 
// fs is the npm module that allows us to interface (do stuff) with the server's files
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// process.env.PORT will be used during production

const client = new pg.Client('postgres://localhost:5432/tasks');
client.connect();

app.use(express.static('./public'));

// Base route for serving up HTML
app.get('/', function(request, response) {
    response.sendFile('./public/index.html');
});

function allTasksQuery() {
    return client.query(`
        SELECT tasks.id, content, 
            users.id AS person_id, users.name AS person, 
            categories.id AS category_id, categories.name AS category 
        FROM tasks 
        INNER JOIN users ON tasks.user_id = users.id 
        INNER JOIN categories ON tasks.category_id = categories.id;
    `);
}

function tasksByCategoryQuery(categoryId) {
    return client.query(`
        SELECT tasks.id, content, 
            users.id AS person_id, users.name AS person, 
            categories.id AS category_id, categories.name AS category 
        FROM tasks 
        INNER JOIN users ON tasks.user_id = users.id 
        INNER JOIN categories ON tasks.category_id = categories.id
        WHERE category_id = $1;
    `,
    [categoryId]
    );
}

// routes for fetching data from DB 
app.get('/tasks', function(request, response) {
    /*
        SELECT content, categories.name AS category, users.name AS person 
        FROM tasks, users, categories 
        WHERE tasks.user_id = users.user_id AND tasks.category_id = categories.category_id;
    */
    const categoryId = request.query.category_id;
    const query = categoryId ? tasksByCategoryQuery(categoryId) : allTasksQuery();

    query
        .then(function(data) {
            response.send(data.rows);
        })
        .catch(function(err) {
            console.error(err);
        });
});

app.get('/tasks/:id', (request, response) => {
    client.query(
        `SELECT * FROM tasks WHERE id = $1`,
        [request.params.id]
    )
        .then(function(data) {
            if(data.rows.length === 0) response.sendStatus(404);
            else response.send(data.rows[0]);
        })
        .catch(function(err) {
            const code = err.code === '22P02' ? 400 : 500;
            response.status(code).send(err.message);
        });
});

app.get('/categories', function (request, response) {
    client.query('SELECT * FROM categories;')
        .then(function (data) {
            response.send(data.rows);
        })
        .catch(function (err) {
            console.error(err);
        });
});

app.get('/users', function (request, response) {
    client.query('SELECT * FROM users;')
        .then(function (data) {
            response.send(data.rows);
        })
        .catch(function (err) {
            console.error(err);
        });
});

// :userid is a placeholder for whatever is input in the url
// ie /users/324/tasks is stored in request.params like this: { userId: 324}
app.get('/users/:userId/tasks', function(request, response) {
    console.log(request.params.username);
    // $1 is the placeholder for the first item of the second parameter's array
    client.query('SELECT * FROM tasks WHERE user_id = $1;', [request.params.userId])
        .then(function(data) {
            response.send(data.rows);
        })
        .catch(function(err) {
            console.error(err);
        });
});

// createTable();
loadDB();

app.listen(PORT, function() {
    console.log(`Listening on port: ${PORT}`);
});

function loadDB() {
    client.query(`
        CREATE TABLE IF NOT EXISTS
        users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL
        );`
    )
        .then(data => {
            loadUsers(data);
        })
        .catch(err => {
            console.error(err);
        });

    client.query(`
        CREATE TABLE IF NOT EXISTS
        categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL
        );`
    )
        .then(data => {
            loadCategories(data);
        })
        .catch(err => {
            console.error(err);
        });

    client.query(`
        CREATE TABLE IF NOT EXISTS tasks (
        id SERIAL PRIMARY KEY,
        content VARCHAR(255) NOT NULL,
        user_id INTEGER REFERENCES users(id) NOT NULL,
        category_id INTEGER REFERENCES categories(id)
    );`
    )
        .then(data => {
            // loadTasks(data);
            //  load the tasks manually!
        })
        .catch(err => {
            console.error(err);
        });}







////// Create database table helper function //////

// function loadFromJSON() {
//     // PUT YOUR RESPONSE HERE
//     client.query('SELECT COUNT(*) FROM tasks')
//         .then(result => {
//             if(!parseInt(result.rows[0].count)) {
//                 fs.readFile('./public/data/tasks.json', (err, fd) => {
//                     JSON.parse(fd.toString()).forEach(ele => {
//                         client.query(`
//                             INSERT INTO
//                             tasks(content, person, category)
//                             VALUES ($1, $2, $3);
//                             `,
//                             [ele.content, ele.person, ele.category]
//                         );
//                     });
//                 });
//             }
//         });
// }

// function createTable() {
//     client.query(`
//       CREATE TABLE IF NOT EXISTS tasks (
//       task_id SERIAL PRIMARY KEY,
//       content VARCHAR(255) NOT NULL,
//       person VARCHAR(255) NOT NULL,
//       category VARCHAR(20));`
//     )
//         .then(() => {
//             loadFromJSON();
//         })
//         .catch(err => {
//             console.error(`createTable ${err}`);
//         });
// }

