'use strict';

// Add pg module
const pg = require('pg');
const Client = pg.Client;

// Windows and Linux users: You should have retained the user/password from the pre-work for this course.
// Your OS may require that your conString is composed of additional information including user and password.
// const conString = 'postgres://USER:PASSWORD@HOST:PORT/DBNAME';

// Mac:
const conString = 'postgres://localhost:5432/demo';

// Set up the client connection to the DB
// 'postgres://localhost:5432/demo'
// 'postgres://localhost:5432/kilovolt'

const client = new Client(conString);
client.connect();

client.query(`
    INSERT INTO users(first_name, last_name, ssn, ninja_status, biography)
    VALUES($1, $2, $3, $4, $5)
  `,
[
    'Tammy',
    'Ninja',
    435444444,
    true,
    'While Timmy and Tommy feuded, Tammy helped the people, became beloved and the Queen Ninja'
])
    .then(() => {
        getNinjas();
    });

function getNinjas() {
    client.query('SELECT * FROM users;')
        .then((data) => {
            console.log(data.rows);
        })
        .catch((err) => {
            console.error(err);
        })
        .then(() => {
            client.end();
        });
}
