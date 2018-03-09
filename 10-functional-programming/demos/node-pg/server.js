'use strict';

/* 1) Environment Variables */
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/superpets';

/* 2) Required Dependencies */
const pg = require('pg');
const express = require('express');

/* 3) Create DB client and connect */
const Client = pg.Client;
const client = new Client(DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

/* 4) Create express app and setup middleware */
const app = express();

// body parsing for requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// server our static assets (.html, .js, .css, .etc. files)
app.use(express.static('public'));

/* 5) Data API Routes */

app.post('/pets', (request, response) => {
    const body = request.body;

    client.query(
        `INSERT INTO pets (name, category_id, description)
        VALUES($1, $2, $3)
        RETURNING id, name, category_id, description;`,
        [body.name, body.category_id, body.description]
    )
        .then(result => {
            response.send(result.rows[0]);
        })
        .catch(console.error);
});


/* 6) Start server */
app.listen(PORT, () => {
    console.log('app server started on port', PORT);
});