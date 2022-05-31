//You get an array of numbers, return the sum of all of the positives ones.
//
// Example: [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0

let array = [1, -4, 7, 12]
let sum


const pos = array.filter((el) => el >= 0)
                 .reduce((previous, current) => previous + current, 0);


// correction nico


console.log(pos);

