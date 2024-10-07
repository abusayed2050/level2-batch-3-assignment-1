"use strict";
{
    const stringArray = ["apple", "banana", "cherry"];
    const numberArray = [10, 20, 30];
    const reverseArray = (arr) => {
        return [...arr].reverse();
    };
    const myStringArray = reverseArray(stringArray);
    const myNumberArray = reverseArray(numberArray);
    console.log(myStringArray);
    console.log(myNumberArray);
}
