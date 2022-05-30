//Write a program that will calculate the average value of a given array.
let number = [100, 101, 102]
let summ = number.reduce(
    (a, b) => a + b, 0
);


console.log(summ/number.length)

