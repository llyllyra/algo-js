// Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in the previous exercise and return a list of the same cast but in a random order.
//
// Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie then display a randomized list of the previous cast that will form the new cast of your next serie.

const readlineSync = require("readline-sync");
let askTvSerie = () => {
    let choix = ""
    let Cast = []
    let Name = readlineSync.question("Quelle est le nom de la série?")
    let Year = readlineSync.question("Quelle est l'année de la série")
    do{
        let Castrep  = readlineSync.question("Quel(s) acteur joue dedans")
        Cast.push(Castrep)
        choix = readlineSync.question("Voulez vous rajouter un acteur? y/n")
    }
    while(choix !== "n")
    return {
        "Name" : Name,
        "Year" : Year,
        "Cast": Cast

    }
}
let randomizeCast = (serie) => {
    let Cast1= [];
    for (let i = 0; i < serie.Cast.length; i++){
        let name = ""
        name = serie.Cast[Math.floor(Math.random() * serie.Cast.length)]
        if (Cast1.indexOf(name) === -1) {
            Cast1.push(name)
        }
        else {
            Cast1.push(1)
        }
    }
    return {
        "Name" : serie.Name,
        "Year" : serie.Year,
        "Cast": Cast1
    }


}
let Serie= askTvSerie()
let randomiser = randomizeCast(Serie)
console.log(JSON.stringify(randomiser))