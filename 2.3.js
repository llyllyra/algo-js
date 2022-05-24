// Display all even numbers between 1 and 100.
const readlineSync = require("readline-sync");
let table = []
let table2 = []
for ( let i= 1; i <= 50; i++)
{
    if(i%2 === 0){
        table.push(i)
        if (i < 50)
        {
            table2.push(100-i)
        }
    }
}
console.log(table +","+ table2.reverse()+",100")

let table3 = []
let b = 1;
while (b <= 100) {
    if(b%2 === 0){
        table3.push(b)
    }
    b++
}
console.log(table3 + "")
