// Make a program that asks the favorite number of the user. If that number is anything other than 42 display "Are you sure?" and ask again. (This program should never end as long as the user didn't chose 42).
const readlineSync = require("readline-sync");
let number
number = readlineSync.question("Quelle est votre chiffe prefere?")
if (number !== 42 )
do{
    number = readlineSync.question("Quelle est votre chiffe prefere?")
    if (number !== 42 ){
        let question = readlineSync.question("Are you sure?")
    }
}
while (number !== 42 )