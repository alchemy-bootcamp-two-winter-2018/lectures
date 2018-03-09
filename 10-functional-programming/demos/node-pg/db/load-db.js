// we need require and initialize postgres client
const pg = require('pg');
const DATABASE_URL = 'postgres://localhost:5432/superpets';
const client = new pg.Client(DATABASE_URL);
client.connect();

const categories = ['cats', 'birds', 'lizards', 'dogs'];

const categoryPromises = categories.map(category => {
    return client.query(
        `INSERT INTO categories(name) 
        VALUES($1)
        ON CONFLICT DO NOTHING;`,
        [category]
    );
});

Promise.all(categoryPromises)
    .then(() => {
        return client.query(
            `SELECT * FROM categories`
        );
    })
    .then(result => {
        console.log(result.rows);
    })
    .then(
        () => console.log('load successful'),
        err => console.error(err)
    )
    .then(() => {
        client.end();
    });