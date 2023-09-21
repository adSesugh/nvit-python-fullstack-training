const car = new Object();
console.log(car)

// Add properties to car object
/* 
    I have create an object called car and
    about to add properties to the oject.
    The expected properties includes;
    - model
    - color
    - manufacturer
    - transmission
    - mileage
    - price
*/
console.log('Add properties to car object')
car.model = 'BMW X6';
car.year = 2023;
car.manufacturer = 'BMW';
car.color = 'Ash';
car.transmission = 'Automatic';
car.price = '$150000';
car.mileage = '10Kmph';
car.brand = 'New';

console.log(car)

console.log('Delete a property of an object')
// delete a property of an object
delete car.brand
console.log(car);

console.log('Add amenities to the car object')
// Add amenities to the car object
car.amenities = ['Wifi', 'AC', 'TV', 'Android Stereo', 'Airbags'];
console.log(car);

// Grab car object keys
console.log('Grab car object keys')
let carKeys = Object.keys(car)
console.log(carKeys);

// Grab car object values
console.log('Grab car object keys')
let carValues = Object.values(car);
console.log(carValues);

let str = 'I am a boy'

// Length of a string
console.log(str.length)

// Print out a boy from the string
console.log(str.slice(7).toUpperCase())

// Slugify the string "I am a boy"
console.log(str.replaceAll(' ', '-').toLowerCase());

let email = 'justina.adole@nvit.tech';
// Strip username from the email above
const arr = email.split('@')
const username = arr[0]

console.log(username)

let car1 = {
    model: 'BMW X6',
    price: 15000,
}

let car2 = {}
car2.model = 'Camry 2023'
console.log(car2)