//Write a program that will calculate the average value of a given array.
let number = [100, 101, 102]
let summ = 0
for (let i = 0 ;i < number.length; i++)
{
    summ += number[i]
}
console.log(summ)
console.log(summ/number.length)

