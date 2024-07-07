
//Question 82: Find the Length of a String: Write a function that takes a string\
// as an argument and returns the number of characters in the string.



function stringLength(str: string): number {
    return str.length; 
}

console.log(stringLength("haris")); 



//Question 83: Converting to Upper and Lower Case: Create a function that takes a string,
// converts it to uppercase, then to lowercase, and logs both.


function myName(name:string){
 let ster =   name.toUpperCase();
   let ster1 = name.toLowerCase();
   console.log("Uppercase:", ster, "Lowercase:", ster1);
    
}
myName("Haris")




//Question 84: Replacing Text in a String: Write a function that takes a sentence and
// replaces all instances of the word "JavaScript" with "TypeScript".

function replacing(name:string):string{
  return name.replace(/javascript/g,"typescript")
}
console.log(replacing("l love javascript,l can do coding in javascript"));
