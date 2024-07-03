//Question 70: Understanding let in Loops: Write a function that uses a loop with 
//the let keyword to print numbers from 1 to 5. Explain how the let keyword affects
// the visibility of the loop variable.
// function UnderstandingLoop(){
//     for(let i =1; i <= 5 ; i++){
//         console.log(i);
//     }
// }
// UnderstandingLoop()
// //Question 71: Compare let and const: Create two examples where let allows reassignment
// // but const does not. Try to reassign a const-declared variable and catch the error.
// let myName="M haris";
// myName ="M usman";//let donot give error because it allow reassignment
// const myName2 ="zimal";
// myName2 ="hashir";//it give error because const is not allow reassignnment\
//Question 72: Block Scope with let and const: Demonstrate block scope by
//creating a code block with {} that uses both let and const. Show how 
//variables declared inside the block are not accessible outside of it.
let nam = "ali";
const nam1 = "umar";
console.log(nam);
console.log(nam1);
{
    let pri = "usman";
    const pri1 = "osama";
    console.log(nam);
    console.log(nam1);
    console.log(pri);
    console.log(pri1);
}
export {};
//console.log(pri);it doesnot work
//console.log(pri1); it doesnot work
