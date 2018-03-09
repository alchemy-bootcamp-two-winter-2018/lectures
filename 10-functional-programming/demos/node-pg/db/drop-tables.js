// we need require and initialize postgres client
const pg = require('pg');
const DATABASE_URL = 'postgres://localhost:5432/superpets';
const client = new pg.Client(DATABASE_URL);
client.connect();

client.query(`
  DROP TABLE pets;
  DROP TABLE categories;
`)
    .then(
        () => console.log('drop successful'),
        err => console.error(err)
    )
    .then(() => {
        client.end();
    });