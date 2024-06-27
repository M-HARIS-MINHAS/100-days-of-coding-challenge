// Question no 55:Double Numbers in an Array: Make a list of numbers. Then, use a
//  trick to make a new list where each number is twice its original value.
/*
let originalNumber:number[]=[1,2,3,4,5]

let DoubleNumber:number[]=originalNumber.map(num =>num*2)

console.log("Original numbers:", originalNumber);
console.log("Doubled numbers:", DoubleNumber);


// Question 56: Keep Only Strings: Given a mix of different types of items,
// make a new list that has only the words.

let mixThings:(string|number|boolean)[]=["football",1,"cricket",24,true];

let stringOnly:string[]=mixThings.filter(item =>typeof item === "string") as string[]

console.log("Original items:", mixThings);
console.log("Strings only:", stringOnly);*/
//Question no 57:Find the Average Grade: Given a list of grades, calculate the average grade.
const grades = [98, 78, 87, 69, 92];
const total = grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const average = total / grades.length;
console.log("Total grades:", total);
console.log("Average grade:", average);
export {};
