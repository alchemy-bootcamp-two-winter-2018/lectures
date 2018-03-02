/* global neighborhoods */
'use strict';

const neighborhoodView = {};

neighborhoodView.initIndex = function() {
  const section = $('#neighborhoods');

  // this is exposed by `neighborhood.js`
  neighborhoods.forEach(neighborhood => {
    section.append(neighborhood.toHtml());
  });
};
