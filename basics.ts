// Primitive types: Strings, numbers, booleans, etc

let age: number;

age = 12

let userName: string;

userName = 'Ulises'

let isStudent: boolean;

isStudent = true;


// More complex types: arrays, and objects

// ARRAYS

let hobbies: string[];
hobbies = ['cooking', 'reading']

let numberOfShoes: number[];
numberOfShoes = [1, 2, 3];

// Objects

let person: {
    name: string,
    age: number,
    dating: boolean
};

person = {
    name: 'Ulises',
    age: 32,
    dating: false
}

// Union types
let source: string | boolean | number = 'this is a react guide'

source = 123242

// Type definition

type Car = {
    model: string,
    year: number,
    coolness: boolean
}

let car : Car;

car = {
    model: 'civic',
    year: 1222,
    coolness: true
}

// Function types

const add = (a: number, b: number): number | string => a+b

// Generics

const insertAtBeginning = <T>(array: T[], value: T) => {
    const newArray = [value,...array];
    return newArray;
};
const demoArray = [1, 2, 3]
const updatedArray = insertAtBeginning(demoArray, -1) // -1, 1, 2, 3