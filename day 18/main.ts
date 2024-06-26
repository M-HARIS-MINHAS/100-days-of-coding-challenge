// Question 52: Make a Smartphone Object: Create a simple way to keep track of a 
// smartphone's details. Include its brand, model, and other key features like how 
// much storage it has, the size of its screen, and how long its battery lasts.
/*

let smartphone ={
 brand:"techno",
 modal:"h2-6",
 specs: {
    storage: "128GB",
    screenSize: "6.2 inches",
    batteryLife: "18 hours"
}
}
console.log(smartphone)

//Question no 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that
//  shows what a computer programmer knows, like coding languages, tools, and software
//   frameworks. Find a way to get three specific skills from this list and show them.

let programmers = {
  languages : ["java","c","c++"],
  frameworks: ["React", "Angular", "Vue"],
  tools: ["Git", "Webpack", "Docker"]
};
let {languages , frameworks , tools} = programmers;

console.log(`languages:${languages[1]},frameworks:${frameworks[1]},tools:${tools[1]}`)*/


// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can 
// change the name of each section based on what you need at that moment, like adjusting 
// labels based on user choices.


let dynamicObject : {[key : string]:string} = {};
function CreateObjectwithDynamicObject(key:string ,Value:string):{[key : string]:string}{
  dynamicObject[key] = Value;
    return dynamicObject;
}
let userPerfence =CreateObjectwithDynamicObject("dark","theme")
console.log(userPerfence)