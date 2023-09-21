//for
//while
//do-while

// for loop
// for(datatype initialExpression; <condition>; <increase|decrease>){

// }

// A program to 1 - 10 to the console
// let n = 10;
// for (let i = 1; i <= n; i++){
//     console.log(i);
// }


// A program to print to console each element in an array
// const arr = [89,34,23,45,67,78,89]
// for (let i =0; i  < arr.length; i++){
//     console.log(arr[i])
// }

// while(condition){
//     //code to execute
// }

let sum = 0;
while(sum <= 20){
    console.log(sum)
    sum +=2
}

while(true){
    ++sum;
    console.log(sum)
    if (sum == 20){
        break;
    }
}