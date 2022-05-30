/*
Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle. That program must use the function you created.

Write a documentation for the calcSurface function.
 */
const readlineSync = require("readline-sync");
let calcSurface = (L, l)=> {
    return `la surface d'un rectangle ${L}cm de largeur et ${l }cm de longeur est de ${L*l} cm²`
}
/*
Fonction qui permet de calculé la surface d'un rectangle
calcSurface(L,l)
L représente la longeur
l représente la largeur

 */

let  L = readlineSync.question("Quelle est la longeur de votre rectangle: ")
let  l = readlineSync.question("Quelle est la largeur de votre rectangle: ")

console.log(calcSurface(L,l))