// Ask the user to enter three numbers: minAge, maxAge and currentAge. Display if current is between min and max.
const readlineSync = require("readline-sync");
//Demander les chiffres

let minAge = readlineSync.question("Quel est l'age min")
let maxAge = readlineSync.question("Quel est l'age max")
if(maxAge > minAge)
{
    console.log(`votre age min (${minAge}) est supérieur à votre age max (${maxAge})`)
}
else {
    let currentAge = readlineSync.question("Quel est votre age actuelle")
    if (currentAge > minAge && currentAge < maxAge) {
        console.log(currentAge)
    } else {
        console.log(`Votre age n'est pas compris entre ${minAge} et ${maxAge}`)
    }
}