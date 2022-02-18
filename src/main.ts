/* eslint-disable @typescript-eslint/no-inferrable-types */

class Person {
  // Class fields
  instantiatedAt: Date = new Date();
  isHuman: boolean = true;
  // Static property
  static description: string = 'May the Force be with you.';

  constructor(public name: string, readonly age: number) {}

  sayHey() {
    console.log(`${this.name} says hey!`);
  }
  // Static method
  static logDescription() {
    console.log(`Logger: ${Person.description}`);
  }
}

const firstPerson = new Person('Luke', 18);
const secondPerson = new Person('Anakin', 37);

console.log(firstPerson);
console.log(secondPerson);

console.log(firstPerson.hasOwnProperty('description'));
console.log(secondPerson.hasOwnProperty('description'));

console.log(Person.prototype.hasOwnProperty('description'));
console.log(Object.getPrototypeOf(firstPerson).hasOwnProperty('description'));

console.log(Person.description);

firstPerson.sayHey();
secondPerson.sayHey();

console.dir(Person.prototype, { depth: null });

Person.logDescription();
