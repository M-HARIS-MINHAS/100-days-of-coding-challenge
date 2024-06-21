// Question 49: Function with Rest Parameters: Write a function that takes a rest 
// parameter representing multiple hobbies. It should log each hobby with a statement
//  saying you enjoy that hobby. 
function myIdea(...hobbies) {
    hobbies.forEach(element => {
        console.log(`l enjoy ${element}`);
    });
}
myIdea("cycling", "coding", "cricket");
//Question 50: Multiline Template Literals: Use template literals to create a 
// multiline string that describes your ideal day. Include at least three 
// different activities.
let myDialyroutine = `My ideal routine involves:
1) pray 5 times namaz
2) do coding 8-9 hours dialy
3) play cricket 1.5 hours
`;
console.log(myDialyroutine);
// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates 
// the area of a rectangle and refactor it into an arrow function.
//orignal function
function calculatesArea(length, width) {
    return length * width;
}
//Refactored to Arrow Function
let calculatesArea1 = (length, width) => length * width;
console.log(calculatesArea1(2, 6));
export {};
