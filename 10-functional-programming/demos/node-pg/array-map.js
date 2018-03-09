
const numbers = [2, 5, 4, 5];

const squares = numbers.map(n => n * n);

console.log(squares);

const peoples = [
    { name: 'tammy', start: 10, end: 20 },
    { name: 'timmy', start: 5, end: 19 },
    { name: 'tommy', start: 7, end: 19 },
    { name: 'tummy', start: 20, end: 29 },
    { name: 'tymmy', start: 7, end: 10 },
];

// 1) basic map
const stats = peoples.map(person => {
    return {
        name: person.name,
        distance: person.end - person.start
    };
});

console.log(stats);

// 2) Same thing with implicit arrow function return
const stats2 = peoples.map(person => ({
    name: person.name,
    distance: person.end - person.start
}));

console.log(stats2);

// 3) Same thing, but map "work" is done in an external function 
const stats3 = peoples.map(person => {
    return makePersonStats(person);
});

function makePersonStats(person) {
    return {
        name: person.name,
        distance: person.end - person.start
    };
}


console.log(stats3);