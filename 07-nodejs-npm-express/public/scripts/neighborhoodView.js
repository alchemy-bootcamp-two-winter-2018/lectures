/* global Neighborhood */
'use strict';

const neighborhoodView = {};

neighborhoodView.formChange = function() {
  const form = $('#new-form');
  form.on('change', 'input,textarea', () => this.preview());
  form.on('submit', () => this.save());
};

neighborhoodView.highlightCode = function() {
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
};

neighborhoodView.save = function() {
  const data = neighborhoodView.getFormData();
  $.post('/api/neighborhoods', data);
};

neighborhoodView.getFormData = function () {
  // gather up the data
  return {
    name: $('#neighborhood-name').val(),
    city: $('#neighborhood-city').val(),
    population: $('#neighborhood-population').val(),
    founded: $('#neighborhood-founded').val(),
    body: $('#neighborhood-body').val()
  };
};

neighborhoodView.preview = function() {
  // gather up the data
  const data = this.getFormData();

  // put the JSON of the data into the export, and make sure visible
  $('#neighborhood-export').show();
  $('#neighborhood-json').val(JSON.stringify(data, true, 2));

  // make a new Neighborhood(data)
  const neighborhood = new Neighborhood(data);

  // get html via .toHtml
  const html = neighborhood.toHtml();

  // replace html of the preview
  $('#preview').html(html);

  // rerun the code highlighting
  this.highlightCode();
};

neighborhoodView.setupView = function() {
  // wire up the things that need the data loaded first
  this.handleShowCitySize();
  //this.handleOtherThing();
};

neighborhoodView.handleShowCitySize = function() {
  $('.js-size').hide();
  $('.js-population').click(function() {
    $(this).children('.js-size').fadeIn();
  });
};

neighborhoodView.loadNeighborhoods = function() {
  // make a request of the server for the data.
  $.getJSON('/api/neighborhoods')
    .done(neighborhoodDataSet => {
      // handle data directly by loading the ViewModels
      const neighborhoods = Neighborhood.load(neighborhoodDataSet);
      this.renderNeighborhoods(neighborhoods);
      // wire up rest of view
      this.setupView();
    })
    .fail(response => {
      console.log('ERROR!', response);
    });
};

// I loop neighborhood objects and put into the dom using their toHtml
neighborhoodView.renderNeighborhoods = function(neighborhoods) {
  const section = $('#neighborhoods');

  // this is exposed by `neighborhood.js`
  neighborhoods.forEach(neighborhood => {
    section.append(neighborhood.toHtml());
  });

  this.highlightCode();
};

neighborhoodView.initIndex = function() {
  // initiate data loading
  this.loadNeighborhoods();

  // do any wiring that can happen without data loaded
  // this.handleMainNav()
};

neighborhoodView.initNew = function() {
  this.formChange();
};
