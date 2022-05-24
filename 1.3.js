// Ask the user to enter its first name and display a message saying "Hello first name".
//Ajouter le package
const readlineSync = require("readline-sync");
//crée variable + demandé son nom et prenom dans le terminal

let firstname = readlineSync.question("Quelle est votre prenom");
let name = readlineSync.question("Quelle est votre nom de famille");

// afficher message
console.log(`Hello ${firstname} ${name}`)