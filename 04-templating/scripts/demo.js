'use strict';

// The Target (where we want finished html to go)
const section = $('#neighborhoods');

// The data
const pearl = {
  name: 'Pearl District',
  city: 'Portland',
  population: 15,
  founded: 1850,
  body: `
    <p>
      <strong>cool</strong> people live here
    </p>
  `
};

// Imperative template using jquery

const template = $('#template');

const instance = $(template.html());
const h2 = instance.children('h2');
h2.text(pearl.name);
const p = instance.children('p');
p.eq(0).text(`Part of: ${pearl.city}`);
p.eq(1).text(`Current Population: ${pearl.population}`);
p.eq(2).text(`Founded on: ${pearl.founded}`);
instance.children('div').append(pearl.body);

section.append(instance);

// Declarative Handlebars Template

const hbTemplateTag = $('#neighborhood-template')
const hbTemplate = Handlebars.compile(hbTemplateTag.html());
const hbInstance = hbTemplate(pearl);

section.append(hbInstance)