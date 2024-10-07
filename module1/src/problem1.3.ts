{
    /* 
        Problem 3:
            Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.

            // Sample Input:
               filterEvenNumbers([1, 2, 3, 4, 5, 6])

            // Sample Output:
               [2, 4, 6]
     */

               const filterNumber:number[] = [1, 2, 3, 4, 5, 6];
               
               const filterEvenNumbers = (arr:number[]) =>{

                    return arr.filter((currentnumber:number)=> currentnumber %2 === 0);
               }  

                const myEvenNumber = filterEvenNumbers(filterNumber);

                console.log(myEvenNumber);

}