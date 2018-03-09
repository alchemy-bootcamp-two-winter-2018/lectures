// we need require and initialize postgres client
const pg = require('pg');
const client = new pg.Client('postgres://localhost:5432/superpets');
client.connect();

client.query(`
  CREATE TABLE IF NOT EXISTS categories(
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) UNIQUE NOT NULL
  );

  CREATE TABLE IF NOT EXISTS pets(
    id SERIAL PRIMARY KEY,
    name VARCHAR(256),
    category_id INTEGER NOT NULL REFERENCES categories(id),
    description VARCHAR(256)
  );
`)
    .then(
        () => console.log('load successful'),
        err => console.error(err)
    )
    .then(() => {
        client.end();
    });