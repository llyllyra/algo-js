/* Create a function named average(arr) that takes an array of numbers as argument and returns the average.

Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.

Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.

Create a program that asks a number to the user then generate that same amount of random numbers but also displays their average, min and max. To do so, use the three functions you just created as well as the multiRand(n) function created in Exercise 3.

Write a documentation for all the functions you created.

 */

const readlineSync = require("readline-sync");


let multiRand = (n) => {
    let rand10 = (min, max) => {
        return Math.floor(Math.random() * (max + 1 - min) + min);
    }

    let array = []
    do (
        array.push(rand10(1, 10))
    )
    while (array.length <= n - 1)
    return array
}


let average = (array) => {
    let summ = array.reduce(
        (a, b) => a + b, 0
    );
    return summ/array.length
}

let min = (array )=> {
    return Math.min(... array)
}
let max = (array )=> {
    return Math.max(... array)
}



let n = readlineSync.question("Combien de chiffre random voulez vous?")
let array = multiRand(n)
console.log(array)
console.log(average(array))
console.log(min(array))
console.log(max(array))
