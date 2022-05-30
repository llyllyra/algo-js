// Make a program that ask the user to enter a number between 1 and 7. Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)
const readlineSync = require("readline-sync");
let number
do
{
    number = Number.parseInt(readlineSync.question("Quelle est votre chiffe?"))
}
while (number < 1 || number > 7)


switch (number){
    case 1 :
        console.log("lundi")
        break
    case 2 :
        console.log("mardi")
        break
    case 3 :
        console.log("mercredi")
        break
    case 4 :
        console.log("jeudi")
        break
    case 5 :
        console.log("vendredi")
        break
    case 6 :
        console.log("samedi")
        break
    case 7 :
        console.log("dimanche")
        break
    default:
        console.log("Ce n'est pas un jour de la semaine")

}

