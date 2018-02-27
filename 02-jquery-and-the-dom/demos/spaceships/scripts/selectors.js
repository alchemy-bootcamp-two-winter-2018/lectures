'use strict';

/** syntax! **/
$('#id');
// It's a function! It's argument is a CSS selector! It returns a jQuery object!!
document.getElementById('id');
document.querySelector('#id');

//*****basic jQuery selectors*****//

//element
$('li'); // returns an array like object of all matching elements
document.querySelectorAll('li');

//class
$('.icon-rocket');
document.getElementsByClassName('icon-rocket');

//id
$('#listings');

//parent descendent
$('#listings div'); //returns all <div>s anywhere inside the #listings element

// parent > child
$('.ship-listing > section'); //returns any <section> that is a DIRECT child of .ship-listing

//attribute
$('img[src=""]');

$('article[data-js-classification="racing"]');

// addtional ways to do the previous selection
const classification = 'racing';
$('.ship-listing[data-js-classification="' + classification + '"]');
$(`.ship-listing[data-js-classification="${classification}"]`);



//*****selector methods*****//

//TODO get the parent element of the <li>s
$('li').parent();

//TODO get the name only from the first ship-listing
$('.ship-listing').first().find('h1.name');



//*****getting and setting data*****//

//get text of the matched element(s)
$('h1').text();

//set text of the matched element(s)
$('h1').text('AHHHHHHH');

//get the data-js-category attribute of an li
$('li').attr('data-js-classification');

//set the data-js-category attribute of an li
$('li').attr('data-js-classification', 'new-value');


//*****creating and deleting elements*****//


// create and append an element
const $li = $('<li>').text('MARS!');
$('ul').append($li);

// remove an element from the DOM
// $('*').remove();



/***** run a command as soon as the DOM loads *****/
/*** to ensure all our elements are loaded! ***/
// $('document').ready(function () {
//   alert('the DOM is ready for lift off');
// });

// window.addEventListener('load', function () {
//   alert('window has loaded');
// });
