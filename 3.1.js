// Write a program that will add all the elements of an array.

let number =  [1,2,3,4,5]
let somme = 0

for (let i = 0 ;i < number.length; i++){
    somme += number[i]
}
console.log(somme)