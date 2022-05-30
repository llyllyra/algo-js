//Write a program that will calculate the average value of a given array.
let number = [100, 101, 102];
let sum = number.reduce((a, b) => a + b, 0);

let calc = sum/number.length;
console.log(calc);
console.log(typeof sum)

