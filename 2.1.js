// Ask the user to enter its age. If its age is at least 18 display "You are an adult". If it's not the case display "You are not yet an adult".
const readlineSync = require("readline-sync");
//Demander l'age

let age = readlineSync.question("quelle age as tu?")

if (age > 18){
    console.log("You are a adult")
}else{
    console.log("You are not yet an adult")
}