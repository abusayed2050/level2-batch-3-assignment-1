"use strict";
{
    /*
        Problem 2:
        Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.

        // Sample Input:
            findLargestNumber([10, 5, 8, 20, 3])

        // Sample Output:
            20
    */
    const findNumber = [10, 5, 8, 20, 3];
    const findLargestNumber = (arr) => {
        return Math.max(...arr);
    };
    const LargeNumber = findLargestNumber(findNumber);
    console.log(LargeNumber);
}
