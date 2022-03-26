/* eslint-disable @typescript-eslint/no-inferrable-types */
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        // Class fields
        this.instantiatedAt = new Date();
        this.isHuman = true;
    }
    Person.prototype.sayHey = function () {
        console.log("".concat(this.name, " says hey!"));
    };
    // Static method
    Person.logDescription = function () {
        console.log("Logger: ".concat(Person.description));
    };
    // Static property
    Person.description = 'May the Force be with you.';
    return Person;
}());
var firstPerson = new Person('Luke', 18);
var secondPerson = new Person('Anakin', 37);
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
