/*
Create a function factorial(a) that returns the factorial of a number.

That function must be recursive.
 */
const readlineSync = require("readline-sync");

let factorial = (nbr) =>
{
    // Si nbr = 0 la factorielle retournera 1
    if (nbr === 0)
    {
        return 1;
    }
    // appelez à nouveau la procédure récursive
    return nbr * factorial(nbr-1);
}
let nbr = readlineSync.question("Quelle est le chiffre? ")
console.log(factorial(nbr));