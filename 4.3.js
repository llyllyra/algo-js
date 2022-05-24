/*By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) that returns an array of n numbers between 1 and 10. You should not modify anything in rand10() to achieve this.

Write a documentation for the multiRand(n) function.

Use that function to create a program that will ask the number of random numbers to generate then display that same number of random numbers.

 */
const readlineSync = require("readline-sync");



let multiRand = (n) => {
    let rand10 =  ()=>{
        return Math.floor(Math.random() * 10 +1);
    }

    let array = []
    do(
        array.push(rand10(1,10))
    )
    while (array.length  <= n - 1)

    return array
}
let n = readlineSync.question("Combien de chiffre random voulez vous?")
console.log(multiRand(n))
