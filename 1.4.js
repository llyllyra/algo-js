//Make this same thing as Exercise 2 but this time ask the user for the name, the first name and the city.

//Ajouter le package
const readlineSync = require("readline-sync");

//Demander nom, prenom, ville

let name = readlineSync.question("Quelle est votre nom") ;
let firstName = readlineSync.question("Quelle est votre prenom");
let city = readlineSync.question("Dans quelle ville habitez vous?");

//afficher les variables

console.log(`Your name is ${firstName} ${name} and you live in ${city}`)