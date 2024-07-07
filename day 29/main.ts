//Question 85: Finding the Position of a Substring: Write a function that locates 
//the first occurrence of the word "code" within any given string and returns its position.

function Substring(element:string):Number{
    return element.indexOf("typescript")
}
console.log(Substring("L Love typescript"));



//Question 86: Checking for Text Presence: Create a function that checks if the word 
//"JavaScript" is present in a given string. It should return true if found, otherwise false.

function Substring1(element1:string):boolean{
    return element1.includes("typescript")
}
console.log(Substring1("L Love typescript"));
console.log(Substring1("L Love javascript"));

//Question no 87:Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.


function Substring2(element2:string):string{
    return element2.substring(0,8)
}
console.log(Substring2("my name is haris"));
