'use strict';

/*** passing an object into a constructor function ***/

function Ship (shipInfo) {
    this.name = shipInfo.name;
    this.owner = shipInfo.owner;
    this.classification = shipInfo.classification;
}

const shipData = [
    {name: 'Sweet Creature', owner: 'Owen', classification: 'luxury'},
    {name: 'Hot Stuff', owner: 'Gina', classification: 'racing'}
];

const ships = [];

/*** using a forEach loop ***/
for(let i = 0; i < shipData.length; i++) {
    // ships.push(new Ship(shipData[i]));
}

/*
    for loop -----> .forEach
    for shipData.length -----> shipData.forEach
    block of code -----> a callback function
    shipData[i] -----> shipObj (parameter of callback)
*/

shipData.forEach(function (shipObj) {
    ships.push(new Ship(shipObj));
});


console.log('SHIPS!');
console.table(ships);