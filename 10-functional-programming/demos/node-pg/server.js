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

// Create
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

// Read
app.get('/pets', (request, response) => {
    client.query(
        `SELECT 
            pets.id, 
            pets.name, 
            category_id,
            categories.name as category, 
            description
        FROM pets
        JOIN categories
        ON pets.category_id = categories.id;`
    )
        .then(result => {
            response.send(result.rows);
        })
        .catch(console.error);
});

// Update
app.put('/pets/:id', (request, response) => {
    const body = request.body;
    const id = request.params.id;

    client.query(
        `UPDATE pets
        SET name=$1, category_id=$2, description=$3
        WHERE id=$4
        RETURNING id, name, category_id, description;
        `,
        [body.name, body.category_id, body.description, id]
    )
        .then(result => {
            response.send(result.rows[0]);
        })
        .catch(console.error);
});

// DESTROY
app.delete('/pets/:id', (request, response) => {
    const id = request.params.id;

    client.query(
        `DELETE FROM pets
        WHERE id=$1;`,
        [id]
    )
        .then(() => {
            response.send({ removed: true });
        })
        .catch(console.error);
});

/* 6) Start server */
app.listen(PORT, () => {
    console.log('app server started on port', PORT);
});