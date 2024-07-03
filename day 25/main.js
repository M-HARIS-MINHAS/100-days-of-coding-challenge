//Question 73: Assigning and Updating Variables: Create a function where you declare a 
//variable using let and assign an initial value. Then, update its value within the same 
//function and log both the initial and updated values.
// function UpdatingVariables(){
//     let num1 =23;
//     console.log("initial value:",num1);
//     num1 =25;
//     console.log("updated value:",num1);
// }
// UpdatingVariables()
//Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. 
//Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
// function SwappingVariables(){
//     let a =5;
//     let b=10;
//     console.log("before Swapping: a=" , a ,"b :" ,b) 
//      let c = a;
//      a = b;
//      b = c;
//      console.log("After Swapping: a=" , a ,"b :" ,b)    
// }
// SwappingVariables()
//Question 75: Compound Assignment Operators: Use compound assignment operators to simplify 
//arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction,
// multiplication, division) on x using compound operators.
function compoundAssignmentOperator() {
    let a = 2;
    a += 2; //equal to a = a+2;
    console.log(a);
    a -= 1; //equal to a = a-1;
    console.log(a);
    a *= 5; //equal to a = a*5;
    console.log(a);
    a /= 3; //equal to a = a/5;
    console.log(a);
}
compoundAssignmentOperator();
export {};
