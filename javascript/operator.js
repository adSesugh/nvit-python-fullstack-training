'use strict'
// //  operator   name   example
// //  = 
// //  +=
// //  -=
// //  /=
// //  *=
// //  **=
// //  %=
// let a = 5;
// console.log(a)
// a += 10;
// console.log(a)
// a -= 2;
// console.log(a)
// a /= 2;
// console.log(a)
// a *= 5;
// console.log(a)
// a **= 2;
// console.log(a)
// a %=2
// console.log(a)

// let b = 7 
// b %= 2
// console.log(b)

// //+ - / * ** ++ -- %
// // + - addition
// // - - substraction
// // * - multiplication
// // / - division
// // ** - Exponential
// // ++ - increase by 1 -- increment
// // -- - decrease by 1 -- decrement
// // % - modulus - division remainder

// let x = 6;

// console.log(++x)
// console.log(++x)

// let y = 10;
// console.log(--y)
// console.log(--y)
// console.log(++y)

// comparison operators
//== === != !== < <= > >= 
// == compare two operands - equal to
// === strict comparison - strict equal to
// != not equal to
// !== strict not equal to
// < less than
// <= less than or equal to
// > greater than
// >= greater than or equal to
// let a = 8;
// let b = 10;
// let c = 8;
// let d = '8'
// let e = '8'
// let f = "hey"

//console.log(a <= b) // (a < b || a == b) 
//console.log(a !== b)
//console.log(a > d)

//Logical operators
//&& - and
//|| - or
//Examples
// if (!b){
//     console.log('Good morning')
// }
// else {
//     console.log("I don't understand what you're talking about!");
// }

//console.log((a >b || b < c))
// console.log(!false)

// & | ~ ^ >> << <<<

// 2 & 4 =  

// Tenary operator
// let a = 40;
// // const b = a < 20 ? 'Teenager' : a > 45 ? 'Elder' : 'Adult';
// // console.log(b)
// if(a < 20){
//     console.log('Teenager')
// }
// else if (a > 45){
//     console.log('Elder')
// }
// else {
//     console.log('Adult')
// }

// function sum(x ,y) {
//     /***
//         This is to add two numbers and return the result
//         - Params:
//             - x: Number
//             - y: Number

//         - Result:
//             result: Number
//     */
//     if (typeof(x) === 'number' && typeof(y) === 'number') {
//         return x + y;
//     }
//     else {
//         return console.log('Hey but not possible')
//     }
// }

// console.log(sum(4, '9'))

// let mark = 'x';
// if(mark < 40) {
//     console.log('Failed')
// } else if(mark >= 40 && mark <= 45) {
//     console.log('Pass')
// } else if (mark > 45 && mark <= 50) {
//     console.log('Fair')
// } else if (mark > 50 && mark <= 60) {
//     console.log('Good')
// } else if (mark > 60 && mark < 70) {
//     console.log('Very Good')
// } else if (mark >= 70) {
//     console.log('Excellent')
// } else {
//     console.log('Hey but i can\'t tell your class')
// }

// console.log(4 + 'undefined')

let a = Math.random(1, 10);
console.log(a)