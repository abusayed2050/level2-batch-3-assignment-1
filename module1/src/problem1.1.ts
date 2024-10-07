{

/* 
    Problem 1:
    Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.

    // Sample Input: 
        repeatString("Hello!", 3)

    // Sample Output:
        "Hello!Hello!Hello!"
 */

        const repeatString = (s:string, n:number):string =>{
    
            let newString :string='';
    
            for(let i=1; i<=n; i++){
                newString += s;
            }
                return newString;
   
        }

        const myString = repeatString("Hello!",3);
        
        console.log(myString);


}