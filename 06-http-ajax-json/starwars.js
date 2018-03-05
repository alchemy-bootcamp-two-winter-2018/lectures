// Short Form
$.get('https://swapi.co/api/people')
  .then(response => {
    // response is just the data:
    console.log(response);
  })
  .catch(response => {
    // for an error, response is whole response object:
    console.log('ERROR', response.status);
  });

// Short Form for JSON
$.getJSON('https://swapi.co/api/people')
  .then(response => {
    // response is just the data:
    console.log(response);
  })
  .catch(response => {
    // for an error, response is whole response object:
    console.log('ERROR', response.status);
  });

// Long form (explicit)
$.ajax({
  url: 'https://swapi.co/api/people',
  method: 'GET'
})
  .then(response => {
    console.log(response);
  })
  .catch(response => {
    console.log('ERROR', response.status);
  });