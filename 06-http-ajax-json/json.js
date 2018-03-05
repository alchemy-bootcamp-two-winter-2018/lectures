
function Person(name, color) {
  this.name = name;
  this.color = color;
  this.nullify = null;
  this.undefinedify = undefined;
}

Person.prototype.say = function() {
  return `I am ${this.name} and I am ${this.color}`;
};

const person = new Person('Sally', 'blue');

console.log(person);

const serialized = JSON.stringify(person, true, 2);

console.log(serialized);

const deserialized = JSON.parse(serialized);

console.log(deserialized);
