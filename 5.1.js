/* Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

    Name
    Production year
    Names of the cast members (there can be as much as the user want)

That function must gather all the data in a single object and return it. The data structure must be elegant.

Create a program that use that function to generate a TV serie object and display it to the user in JSON format.

 */
const readlineSync = require("readline-sync");
let askTvSerie = (Name, Year, Cast) => {
    let serie = {Name, Year, Cast}
    return console.log(serie)
}

let Name = readlineSync.question("Quelle est le nom de la série?")
let year = readlineSync.question("Quelle est l'année de la série")
let Cast  = readlineSync.question("Quel(s) acteur joue dedans")

askTvSerie(Name, year, Cast)