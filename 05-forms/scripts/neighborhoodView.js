/* global neighborhoods, Neighborhood */
'use strict';

const neighborhoodView = {};

neighborhoodView.formChange = function() {
  const form = $('#new-form');
  form.on('change', 'input,textarea', () => this.preview());
};

neighborhoodView.preview = function() {
  // gather up the data
  const data = {
    name: $('#neighborhood-name').val(),
    city: $('#neighborhood-city').val(),
    population: $('#neighborhood-population').val(),
    founded: $('#neighborhood-founded').val(),
    body: $('#neighborhood-body').val()
  };

  // put the JSON of the data into the export, and make sure visible
  $('#neighborhood-export').show();
  $('#neighborhood-json').val(JSON.stringify(data, true, 2));

  // make a new Neighborhood(data)
  const neighborhood = new Neighborhood(data);

  // get html via .toHtml
  const html = neighborhood.toHtml();

  // replace html of the preview
  $('#preview').html(html);
};

neighborhoodView.loadNeighborhoods = function() {
  const section = $('#neighborhoods');

  // this is exposed by `neighborhood.js`
  neighborhoods.forEach(neighborhood => {
    section.append(neighborhood.toHtml());
  });
};

neighborhoodView.initIndex = function() {
  this.loadNeighborhoods();
};

neighborhoodView.initNew = function() {
  this.formChange();
};
