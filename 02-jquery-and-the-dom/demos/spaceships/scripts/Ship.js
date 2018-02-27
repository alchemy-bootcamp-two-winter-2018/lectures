'use strict';

/*** passing an object into a constructor function ***/

function Ship (name, owner, classification) {
    this.name = name;
    this.owner = owner;
    this.classification = classification;
}

const shipData = [
    {name: 'Sweet Creature', owner: 'Owen', classification: 'luxury'},
    {name: 'Hot Stuff', owner: 'Gina', classification: 'racing'}
];

const ships = [];

/*** using a forEach loop ***/
for(let i = 0; i < shipData.length; i++) {
    ships.push(new Ship(shipData[i].name, shipData[i].owner, shipData[i].classification));
}