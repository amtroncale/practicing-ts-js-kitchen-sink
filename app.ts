const userName = 'Adam';
const numberOfStates = 50;
const sum = 5 + 4;

const display: (message: string) => void = typeof alert != "undefined" ? alert : console.log;

const sayHello = () => display('Hello World!')
const checkAge = (name: string, age: number) =>
    age < 21 ?
        display("Sorry " + name + ", you aren't old enough to view this page!") :
        undefined;

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18)
checkAge("John", 17);

const vegetables = ['tomatoes', 'onions', 'spinach', 'cucumbers', 'squash'];

vegetables.forEach (vegetable => console.log(vegetable));

const pet = {
    name: "Maverick",
    age: 7
};

const people = [
    { name: 'Adam', age: 37 },
    { name: 'Jessica', age: 34 },
    { name: 'Maverick', age: 7 },
    { name: 'Luke', age: 33 },
    { name: 'Frank', age: 49 }
];

people.forEach(person => checkAge(person.name, person.age));

const getLength = (text: string) => text.length;

const check = getLength('Hello World!');
console.log(check % 2 == 0 ? 'The world is nice and even!' : 'The world is an odd place!');