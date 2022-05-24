// Ask two integers to the user. Display the rest of the integer division of the two numbers.
const readlineSync = require("readline-sync");
let nomberOne = Number(readlineSync.question("Quelle est votre premier chiffre"))
let nomberTwo= Number(readlineSync.question("Quelle est votre deuxieme chiffre"))

let number = parseInt(nomberOne)%parseInt(nomberTwo)

console.log(number)

