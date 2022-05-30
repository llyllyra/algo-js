//Make a program that generates an integer between 1 and 100 (don't display it to the user).
//
// Then the program should display "Guess the number" and ask the user to guess. If the user enters a number which is too low it should display "Too low" and re-ask the question. If the user enters a number which is too high it should display "Too high" and re-ask the question. If the user guess correctly it should display "Well guessed!" and exit.
const readlineSync = require("readline-sync");

let nbrbot = 0;
let message = "";
let reponse ="";

let generates = () => {
    let rand = (min, max) => {
        return Math.floor(Math.random() * max + 1 - min);
    }
    nbrbot = rand(1, 100)
    do {
        reponse = readlineSync.question("A quelle nombre pensez vous?")
        if (reponse < nbrbot) {
            $message = "Le chiffre is too low";
        }
        if (reponse > nbrbot) {
            $message = "Le chiffre is too hight";
        }
        console.log($message);
    }
    while (reponse != nbrbot)
    $message = "Well guessed!";

    return console.log($message);
}

generates();

