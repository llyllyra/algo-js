/*
Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space. That function must return the distance between those two points.

Examples results:

    Point A = [1, 1], point B = [2, 2] => 1.41
    Point A = [1, 1], point B = [3, 1] => 2
    Point A = [4, 1], point B = [1, 1] => 3
    Point A = [-2, 2], point B = [2, -2] => 5.65

Create a program to use that function.

Write a documentation for the calcDistance function.

Note: You probably need to make some search on Google to learn the mathematical formula to do that. You will also probably need to search for useful functions in JavaScript to help you making complex mathematical formulas...
 */

/**
 *
 * @returns {number}
 * @param array1
 * @param array2
 */


let calcDistance = (array1,array2) =>
{

    return parseInt(Math.sqrt((array2[0] - array1[0])**2 + (array2[1]- array1[1])**2))
}
let array1 = [1,1]
let array2 = [3,1]
console.log(calcDistance(array1,array2))