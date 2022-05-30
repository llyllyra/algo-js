// Ask two numbers with decimal part to the user. For the first one only keep the integer part. Then multiply them and display the result.
const readlineSync = require("readline-sync");
//demandez les nombres

let nomberOne = Number(readlineSync.question("Quelle est votre premier chiffre a virgule"))
let nomberTwo= Number(readlineSync.question("Quelle est votre deuxieme chiffre a virgule"))
//faire le calcul
let nomber = parseInt(nomberOne) * nomberTwo


//Afficher le chiffre
console.log(nomber)