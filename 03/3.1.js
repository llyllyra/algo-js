// Write a program that will add all the elements of an array.

let number =  [1,2,3,4,5]
let number2 = [100, 101, 102]

let sum = number.reduce(
    (a, b) => a + b, 0
);

let sum1 = number2.reduce(
    (a, b) => a + b, 0
);


console.log(sum)
console.log(sum1)