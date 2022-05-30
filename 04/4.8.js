/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
 */

let queueTime = (array, n) => {
    if(n === 1){
        return console.log(array.reduce((a,b) => a + b ,0))
    }
    else {
        if(Math.max(...array) > array[array.length-1] ){
            return   console.log(Math.max(...array))
        }
        else{
            return console.log(Math.max(...array)+ Math.min(...array))
        }
    }

}
queueTime([5,3,4], 1)
queueTime([10,2,3,3], 2)
queueTime([2,3,13], 2)