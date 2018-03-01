'use strict';

// data set is: neighborhoodDataSet

const templateElement = $('#neighborhood-template')
const template = Handlebars.compile(templateElement.html());

function Neighborhood(data) {
  // initialization
  Object.keys(data).forEach((key) => {
    this[key] = data[key];
  });
  
  // also could be written as:
  // Object.keys(data).forEach((key) => this[key] = data[key]);
  
  if(this.population > 20000) {
    this.size = 'big';
  }
  else {
    this.size = 'small';
  }

  this.formattedPopulation = this.population.toLocaleString();

  // also could be written as:
  // this.size = this.population > 20000 ? 'big' : 'small';

}

//prototype methods: things all neighborhoods do
Neighborhood.prototype.toHtml = function() {
  // return the html for "this" neighborhood
  return template(this);
}


const section = $('#neighborhoods');

// loop the data set
neighborhoodDataSet.forEach(neighborhoodData => {
  // created a Neighborhood component for each neighborhood data
  const neighborhood = new Neighborhood(neighborhoodData);
  // call toHtml to get it's html
  const html = neighborhood.toHtml();
  // append to the section
  section.append(html);
})
