/* global neighborhoodDataSet */
'use strict';

const templateElement = $('#neighborhood-template');
const templateHtml = templateElement.html();

const template = Handlebars.compile(templateHtml);

function Neighborhood(data) {
  // copy the source data to our class instance:
  Object.keys(data).forEach((key) => this[key] = data[key]);
  // calculated "derived" data:
  this.size = this.population > 20000 ? 'big' : 'small';
  this.formattedPopulation = this.population.toLocaleString();
  this.htmlBody = marked(this.body); // convert this.body to markdown
}

// return the html for "this" neighborhood
Neighborhood.prototype.toHtml = function() {
  return template(this);
};

// Transform our rawData into an array of neighborhood objects:
// const neighborhoods = neighborhoodDataSet.map(data => new Neighborhood(data));

const neighborhoods = [];
neighborhoodDataSet.forEach(neighborhoodData => {
  // created a Neighborhood component for each neighborhood data
  const neighborhood = new Neighborhood(neighborhoodData);
  neighborhoods.push(neighborhood);
});