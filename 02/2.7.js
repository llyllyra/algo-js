// Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number. At the end display the sum of all the numbers collected this way.
const readlineSync = require("readline-sync");

let turn = Number.parseInt(readlineSync.question("Combien de chiffre voulez vous donner?"))
let number = 0
let choise
for (let i = 1; i <= turn; i++){
    choise = Number.parseInt(readlineSync.question("donnez moi un chiffre"))
    number += choise
}
console.log(number)
