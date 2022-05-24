const readlineSync = require("readline-sync");
let userName = readlineSync.question('Can you give me your name please?');
console.log("Hello " + userName);
let name = "Nicolas";
let nameSister = "Emma";
console.log(`My name is ${name} & my sister's name is ${nameSister}`);

let htmlBadges = new Number(readlineSync.question('How many HTML badges do you have?'));

let cssBadges = new Number(readlineSync.question('How many CSS badges do you have?'));

let totalBadges = htmlBadges + cssBadges;

console.log('Woaw, you have ' + totalBadges + "!");
console.log('10' + '5'); // '105' => string type

console.log(10 + 5); // 15 => number type
