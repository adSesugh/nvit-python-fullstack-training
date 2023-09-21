// const arr = ["Inno", [1, 2, 3, 4], "Justina", { name: "Precious", age: 23, course: "Python" }, 8];
// console.log(arr);

// console.log(arr[3]);

// const arr2 = [56, 77, 34, 79];
// arr2.push(90);

// console.log(arr2);

// arr2.pop();

// console.log(arr2);

// arr2.shift();
// console.log(arr2);

// arr2.unshift();

// let total = 0;
// arr2.forEach(el => {
//     total += el;
// });

// console.log(total);

// // Average
// console.log(total / arr2.length);

// console.log('Using reduce method');
// const total2 = arr2.reduce((acc, current) => acc + current);
// console.log(total2 / arr2.length);

// const arr3 = ["Adole", "Justina", "Flame", "Precious", "Adole", "Precious"];
// const newArr3 = arr3.filter(el => el === 'Adole');
// console.log(newArr3);

// const arr4 = [{ name: "Precious", age: 23, course: "Python", gender: 'Female' }, { name: "Victor", age: 70, course: "Javascript", gender: 'male' }, { name: "Justina", age: 70, course: "Javascript", gender: 'female' }];
// const newArr4 = arr4.filter(el => el.gender.toLowerCase() !== 'female'.toLowerCase());
// console.log(newArr4);

// const arr5 = [{ name: "Precious", age: 23, course: "Python", gender: 'Female' }, { name: "Victor", age: 70, course: "Javascript", gender: 'male' }, { name: "Justina", age: 70, course: "Javascript", gender: 'female' }];
// const newArr5 = arr5.find(el => el.gender.toLowerCase() === 'female '.toLowerCase());
// console.log(newArr5);

let arrN = new Array();

const arrNew = arrN.map(el => el + 4);
console.log(arrNew);
console.log(typeof (arrN));
console.log(arrN.values());

// if (arrN.length > 0 && arrN.values()) {
//     console.log('Is array');
// } else {
//     console.log('Is not array');
// }