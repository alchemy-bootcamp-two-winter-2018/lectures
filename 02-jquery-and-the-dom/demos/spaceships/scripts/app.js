'use strict';

/*
    1. get the html from the template tag
    1. add whatever updated info to:
        - name
        - classification
*/

const template = $('#listing-template').html(); // getting the html string from our template

const $listing = $(template); // creates new html element(s) and jQuery object from template
$listing.find('.name').text('Monkeys');
$listing.attr('data-js-classification', 'explorer');
$('#listings').append($listing);
console.log($listing[0]);

const $listing2 = $(template);
$listing2.find('.name').text('Bananas');
$listing2.attr('data-js-classification', 'cargo');
$('#listings').append($listing2);


// add a new .ship-listing and append it to #listings
// const listings = document.getElementById('listings');
// const newListing = document.createElement('article');
// newListing.classList.add('ship-listing');

// const section = document.createElement('section');
// const imgSection = document.createElement('section');
// const nameDiv = document.createElement('div');
// const ratingDiv = document.createElement('div');
// const img = document.createElement('img');
// img.src = '';
// img.setAttribute('alt', 'COOL SHIP GIF!!!');
// nameDiv.classList.add('name');
// nameDiv.textContent = 'THIS SHIP IS DIFFERENT';

// const ratingSpan = document.createElement('span');
// ratingSpan.classList.add('icon-rocket');
// ratingDiv.appendChild(ratingSpan);

// section.appendChild(nameDiv);
// section.appendChild(ratingDiv);
// imgSection.appendChild(img);

// newListing.appendChild(section);
// newListing.appendChild(imgSection);
// listings.appendChild(newListing);