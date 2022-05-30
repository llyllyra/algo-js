const readlineSync = require("readline-sync");
let number = readlineSync.question("Combien d'entier voulez vous?")

let fibonnaci = (number) => {
    let tableau = new Array(2)
    tableau[0] = 0;
    tableau[1] = 1;
    for (let i = 2; i <= number; i++) {
        let calc = tableau[i-1]+ tableau[i-2]
        tableau.push(calc)

    }
    return console.log(tableau)
}

fibonnaci(number)