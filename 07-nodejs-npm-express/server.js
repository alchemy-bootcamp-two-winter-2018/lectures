const cool = require('cool-ascii-faces');
// require the module so we can use it
const express = require('express');
const fs = require('fs');

// create an express app
const app = express();

// express middleware for serving a directory of files
app.use(express.static('public'));

// express middleware to read the body of a request
app.use(express.urlencoded({ extended: true }));

app.get('/cool', (request, response) => {
  response.send(`hello express: ${cool()}`);
});

app.get('/api/neighborhoods', (request, response) => {
  // send a file (tomorrow is db)
  response.sendFile(`${__dirname}/data/neighborhoods.json`);
});

app.post('/api/neighborhoods', (request, response) => {
  const file = 'data/neighborhoods.json';
  const raw = fs.readFileSync(file);
  const neighborhoods = JSON.parse(raw);
  neighborhoods.push(request.body);
  fs.writeFileSync(file, JSON.stringify(neighborhoods, true, 2));

  response.send(request.body);
});

// custom 404 handler
app.use((request, response) => {
  response.statusCode = 404;
  response.send(`
    Oh noes! Page ${request.url} doesn't exist. 
    But, you still get ${cool()}
  `);
});

app.listen(3000, () => {
  console.log('app up and running on port 3000');
});

