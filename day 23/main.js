//Question 67: Arithmetic with Mixed Types: Write a function that takes two 
//parameters: a number and a string that represents a number (e.g., "5"). Return 
//their sum as a number. 
// function mixedTypes(num:number,stringNumber:string){
//     return num + Number(stringNumber)
// }
// console.log(mixedTypes(10,"5"));
//Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers
// and returns their product. Round the result to two decimal places.
// function mutiplyingDecimals(num1:number,num2:number){
//     return Math.round((num1*num2)*100)/100
// }
// console.log(mutiplyingDecimals(3.3,5.5))
//Question 69: Dividing and Finding the Remainder: Write a function that divides
//two numbers and returns both the quotient and the remainder. Use an object to return both values.
function divideAndFindRemainder(dividend, divisor) {
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;
    return { quotient, remainder };
}
// Example usage:
const result = divideAndFindRemainder(10, 3);
console.log(result); // Output: { quotient: 3, remainder: 1 }
export {};
