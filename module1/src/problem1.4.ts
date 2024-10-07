{
    /* 
        Problem 4:
        Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.

        // Sample Input 1:
            reverseArray(["apple", "banana", "cherry"])

        // Sample Output 1:
            ["cherry", "banana", "apple"]

        // Sample Input 2:
            reverseArray([10, 20, 30])

        // Sample Output 2: 
            [30, 20, 10]
    
     */

            type arrType<T>=Array<T>;

            const stringArray:arrType<string> = ["apple", "banana", "cherry"];
            const numberArray:arrType<number> = [10, 20, 30];

            const reverseArray = <T>(arr:T[]):T[] =>{

                return [...arr].reverse();

            }

            const myStringArray = reverseArray(stringArray);
            
            const myNumberArray = reverseArray(numberArray);

            
            console.log(myStringArray);
            
            console.log(myNumberArray);
}           
