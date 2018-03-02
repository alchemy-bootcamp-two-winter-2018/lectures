/* global neighborhoods */
'use strict';

const neighborhoodView = {};

neighborhoodView.formChange = function() {
  const form = $('#new-form');
  form.on('change', 'input,textarea', () => this.preview());
};

neighborhoodView.preview = function() {
  // gather up the data
  const data = {
    name: $('#neighborhood-name').val()
  };

  console.log('got to preview!', data);
  // make a new Neighborhood(data)

  // get html via .toHtml

  // append to preview
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
