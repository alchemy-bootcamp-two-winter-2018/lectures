// 'use strict';

function Person(name) {
  this.name = name;
  this.toys = ['ball', 'doll', 'flower'];
}

Person.prototype.makeToyList = function() {
  const listItems = [];
  this.toys.forEach(toy => {
    listItems.push(`<li>${this.name} has a ${toy} toy</li>`);
  });
  return listItems.join('');
};

const person = new Person('joey');

console.log(person.makeToyList());

// const person2 = {
//   name: 'stranger',
// };

// const said = person.sayHello.call({ name: 'sally '});
// console.log('person.sayHello.call({ name: "sally"})', said);

// person2.sayHello = person.sayHello;
// console.log('person2.sayHello = person.sayHello', person2.sayHello());

// const sayHello = person.sayHello; //.bind({ name: 'bound person' });

// console.log('const sayHello = person.sayHello', sayHello());