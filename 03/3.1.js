// Write a program that will add all the elements of an array.

let number =  [1,2,3,4,5]
/*
let somme = 0

for (let elem of number){
    somme += elem
}
*/

let somme = number.reduce(
    (a, b) => a + b, 0
);


console.log(somme)