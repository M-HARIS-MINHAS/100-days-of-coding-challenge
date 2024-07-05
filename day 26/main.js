//Question 76: Function Parameters and Return Values: Create a function that takes
//two numbers as parameters, adds them together, and returns the result. Show how you
// can call this function and log the result.
// function addNumber(num1:number,num2:number){
//     return num1 + num2
// }
// console.log(addNumber(6,4))
//Question 77: Default Parameters: Write a function that greets a user. It should take the
// user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
// function defaultParameter(name:string ="anonymous"){
//     console.log(`Hello ${name}`);
// }
// defaultParameter("haris");
// defaultParameter()
//Function Expressions vs. Function Declarations: Compare function expressions and 
//declarations by creating one of each that performs the same task, such as squaring a number.
function declaration(number) {
    return number * number;
}
const expression = function (number1) {
    return number1 * number1;
};
console.log(declaration(2));
console.log(expression(2));
export {};
