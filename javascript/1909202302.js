const prompt = require('prompt-sync')({ sigint: true });
console.log("=============================================");
console.log("====  Choose a number between 1 and 10  =====");
console.log("=============================================");
console.log('\n');

let guess = parseInt(prompt('Guess a number '));
const winningNumber = 5;
let attempts = 1;

while (true) {
    if (guess === winningNumber) {
        //console.log('You just hit the jackpot at ' + attempts + ' attempts');
        console.log('\n');
        console.log(`You just hit the jackpot at ${attempts} attempts`);
        break;
    }
    if (attempts === 5) {
        console.log('\n');
        console.log(`Sorry, but you loose after ${attempts} attempts`);
        break;
    }
    ++attempts;
    guess = parseInt(prompt('Whoop! Please try again '));
}