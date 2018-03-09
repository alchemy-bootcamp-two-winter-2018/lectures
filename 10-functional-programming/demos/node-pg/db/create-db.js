// we need require and initialize postgres client
const pg = require('pg');
const DATABASE_URL = 'postgres://localhost:5432/superpets';
const client = new pg.Client(DATABASE_URL);
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
        () => console.log('create successful'),
        err => console.error(err)
    )
    .then(() => {
        client.end();
    });