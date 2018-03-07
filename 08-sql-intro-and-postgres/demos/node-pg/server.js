'use strict';

// Add pg module
const pg = require('pg');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Windows and Linux users: You should have retained the user/password from the pre-work for this course.
// Your OS may require that your conString is composed of additional information including user and password.
// const conString = 'postgres://USER:PASSWORD@HOST:PORT/DBNAME';

// Mac:
const conString = 'postgres://localhost:5432/demo';

// Set up the client connection to the DB
// 'postgres://localhost:5432/demo'
// 'postgres://localhost:5432/kilovolt'

const client = new pg.Client(conString);
client.connect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));

// DB routes for CRUD operations
app.get('/db/person', (request, response) => {
    client.query('SELECT * FROM ninjas;')
        .then((data) => {
            response.send(data);
        })
        .catch((err) => {
            console.error(err);
        });
});

app.post('/db/person', (request, response) => {
    const body = request.body;

    client.query(`
        INSERT INTO ninjas(name, age, ninja)
        VALUES($1, $2, $3);
    `,
    [
        body.name,
        body.age,
        body.ninja,
    ]
    )
        .then(data => {
            console.log(data);
            // response.redirect('/');
            response.send(data);
        })
        .catch(function(err) {
            console.error(err);
        });
});


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

createTable();

////// Create database table helper function //////
function createTable() {
    client.query(`
    CREATE TABLE IF NOT EXISTS ninjas(
      id SERIAL PRIMARY KEY,
      name VARCHAR(256),
      age INTEGER,
      ninja BOOLEAN
    );`
    )
        .then(function(response) {
            console.log('CREATE TABLE', response);
        });
}
