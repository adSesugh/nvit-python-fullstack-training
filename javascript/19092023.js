/**
 * 1. create an array of integers with 5 elements
 * 2. add 67, 90 to the above array
 * 3. print to screen the element at position 3
 * 4. compute the total sum of the new array
 * 5. using shift, unshift, push or pop method to retrieve the first element in the new array above.
 */

// function sayHello () {
//     let hour = 18;
//     if (hour >= 6 && hour < 12) {
//         console.log('Hello, Good morning!');
//     }
//     else if (hour === 12) {
//         console.log('Hello, Good noon!');
//     }
//     else if (hour > 12 && hour < 16) {
//         console.log('Hello, Good afternoon!');
//     }
//     else if (hour > 16 && hour <= 20) {
//         console.log('Hello, Good evening!');
//     }
//     else {
//         console.log('Hello, Good day');
//     }
// }

// sayHello();

// const a = 8;

// function sayHelloAgain () {
//     let hour = 18;
//     var greeting;
//     console.log(a);
//     if (hour >= 6 && hour < 12) {
//         greeting = 'Hello, Good morning!';
//     }
//     else if (hour === 12) {
//         greeting = 'Hello, Good noon!';
//     }
//     else if (hour > 12 && hour < 16) {
//         greeting = 'Hello, Good afternoon!';
//     }
//     else if (hour > 16 && hour <= 20) {
//         greeting = 'Hello, Good evening!';
//     }
//     else {
//         greeting = 'Hello, Good day';
//     }

//     return greeting;
// }

// const greetings = sayHelloAgain();
// console.log(greetings);

// function sayHelloWithParams (hour) {
//     var greeting;
//     if (hour >= 6 && hour < 12) {
//         greeting = 'Hello, Good morning!';
//     }
//     else if (hour === 12) {
//         greeting = 'Hello, Good noon!';
//     }
//     else if (hour > 12 && hour <= 16) {
//         greeting = 'Hello, Good afternoon!';
//     }
//     else if (hour > 16 && hour <= 20) {
//         greeting = 'Hello, Good evening!';
//     }
//     else if (hour > 20 && hour <= 23 || hour >= 0 && hour < 6) {
//         greeting = 'Hello, Good day';
//     }
//     else {
//         greeting = "Invalid! Choose another hour number";
//     }

//     return greeting;
// }

// const greetings = sayHelloWithParams(123);
// console.log(greetings);

// Arrow function
// const sayHelloWithParams = (hour) => {
//     var greeting;
//     if (hour >= 6 && hour < 12) {
//         greeting = 'Hello, Good morning!';
//     }
//     else if (hour === 12) {
//         greeting = 'Hello, Good noon!';
//     }
//     else if (hour > 12 && hour <= 16) {
//         greeting = 'Hello, Good afternoon!';
//     }
//     else if (hour > 16 && hour <= 20) {
//         greeting = 'Hello, Good evening!';
//     }
//     else if (hour > 20 && hour <= 23 || hour >= 0 && hour < 6) {
//         greeting = 'Hello, Good day';
//     }
//     else {
//         greeting = "Invalid! Choose another hour number";
//     }

//     return greeting;
// };
// const greetings = sayHelloWithParams(123);
// console.log(greetings);

const prompt = require('prompt-sync')({ sigint: true });
const sum = require('./helpers');

const a = parseInt(prompt('Enter value for A '));
const b = parseInt(prompt('Enter value for B '));
// function sum (x, y) {
//     return x + y;
// }

// console.log(sum(a, b))

console.log(sum(a, b))




