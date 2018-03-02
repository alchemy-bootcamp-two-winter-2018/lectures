'use strict';

const person = {
  name: 'fred',
  //sayHello: function() {
  sayHello() {
    return `Hi, I am ${this ? this.name : 'no context :('}`;
  }
};


console.log('person.sayHello()', person.sayHello());

// const person2 = {
//   name: 'stranger'
// };

// const said = person.sayHello.call({ name: 'sally '});
// console.log('person.sayHello.call({ name: "sally"})', said);

// person2.sayHello = person.sayHello;
// console.log('person2.sayHello = person.sayHello', person2.sayHello());

// const sayHello = person.sayHello; //.bind({ name: 'bound person' });

// console.log('const sayHello = person.sayHello', sayHello());