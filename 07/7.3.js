// Make a program that asks for a positive integer. Then display all the divisors of that integer which are not 1 or itself.
//
// Examples:
//
//     7 => nothing (it's a prime number)
//     10 => 2 5
//     9187 => nothing (it's a prime number too)
//     134234 => 2 41 82 1637 3274 67117
const readlineSync = require("readline-sync");

let divisor = () => {
    let message
    let number = parseInt(readlineSync.question('De quelle nombre voulez vous avoir les diviseurs?'))
    for (let i = 1; i <= number; i++) {
        if (i !== 1 && i !==number) {
            if (number % i === 0) {
                if (number % i !== 2)
                {
                    message = `${i} est un diviseur de ${number}`
                    console.log(message)
                }
            }
        }

    }

}

divisor()