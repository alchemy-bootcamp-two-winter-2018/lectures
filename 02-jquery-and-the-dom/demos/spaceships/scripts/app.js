'use strict';

// add a new .ship-listing and append it to #listings
const listings = document.getElementById('listings');
const newListing = document.createElement('article');
newListing.classList.add('ship-listing');

const section = document.createElement('section');
const imgSection = document.createElement('section');
const nameDiv = document.createElement('div');
const ratingDiv = document.createElement('div');
const img = document.createElement('img');
img.src = '';
img.setAttribute('alt', 'COOL SHIP GIF!!!');
nameDiv.classList.add('name');
nameDiv.textContent = 'THIS SHIP IS DIFFERENT';

const ratingSpan = document.createElement('span');
ratingSpan.classList.add('icon-rocket');
ratingDiv.appendChild(ratingSpan);

section.appendChild(nameDiv);
section.appendChild(ratingDiv);
imgSection.appendChild(img);

newListing.appendChild(section);
newListing.appendChild(imgSection);
listings.appendChild(newListing);