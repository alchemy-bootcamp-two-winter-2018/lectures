'use strict';

const pg = require('pg');
const fs = require('fs');
const client = new pg.Client('postgres://localhost:5432/tasks');
client.connect();

// 1) Run these:
loadUsers();
loadCategories();

// 2) Then run these:
// loadTasks();

function loadUsers() {
    fs.readFile('./public/data/tasks.json', function(err, fd) {
        JSON.parse(fd.toString()).forEach(function(ele) {
            client.query(
                'INSERT INTO users(name) VALUES($1) ON CONFLICT DO NOTHING',
                [ele.person]
            );
        });
    });
}

function loadCategories() {
    fs.readFile('./public/data/tasks.json', function(err, fd) {
        JSON.parse(fd.toString()).forEach(function(ele) {
            client.query(
                'INSERT INTO categories(name) VALUES($1) ON CONFLICT DO NOTHING',
                [ele.category]
            );
        });
    });
}

function loadTasks() {
    client.query('SELECT COUNT(*) FROM tasks')
        .then(result => {
            if(!parseInt(result.rows[0].count)) {
                fs.readFile('./public/data/tasks.json', (err, fd) => {
                    JSON.parse(fd.toString()).forEach(ele => {
                        insertTask(ele);
                    });
                });
            }
        });
}

function insertTask(data) {
    Promise.all([
        client.query(
            `SELECT id FROM users WHERE name = $1`,
            [data.person]
        ),
        client.query(
            `SELECT id FROM categories WHERE name = $1`,
            [data.category]
        )
    ])
        .then(results => {
            const userResult = results[0];
            const categoryResult = results[1];
            const userId = userResult.rows[0].id;
            const categoryId = categoryResult.rows[0].id;
            client.query(
                `INSERT INTO tasks(content, user_id, category_id)
      VALUES($1, $2, $3)`,
                [data.content, userId, categoryId]
            ).then(() => {
                console.log('successfully inserted', data.content);
            });
        });
}
