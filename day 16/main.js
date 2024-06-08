"use strict";
//question no 42:Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
function make_great1(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
let magicians2 = ["haris", "david", "usman"];
make_great(magicians2);
make_great(magicians2);
console.log(magicians2);
//question no 43:Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Step 1: Define the original array of magicians' names
const magicians = ["Haris", "David", "usman"];
// Step 2: Create the make_great function
function make_great(magicians) {
    return magicians.map(magician => `${magician} the Great`);
}
// Step 3: Create the show_magicians function
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
// Step 4: Call make_great with a copy of the original array
const greatMagicians = make_great([...magicians]);
// Step 5: Call show_magicians with both arrays
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
//question no 44:Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// Step 1: Define the function with a rest parameter
function make_sandwich(...items) {
    console.log("\nMaking a sandwich with the following items:");
    items.forEach(item => console.log(`- ${item}`));
    console.log("Your sandwich is ready!\n");
}
// Step 3: Call the function multiple times with different numbers of arguments
make_sandwich("cheese", "tomato", "Lettuce");
make_sandwich("Turkey", "Bacon", "Avocado");
make_sandwich("Peanut Butter", "Jelly");
//question no 45:Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature.    Print the Object that’s returned to make sure all the information was stored correctly.*/
// Step 1 and 2: Define the function with required parameters and rest parameters for additional properties
function createCar(manufacturer, model, ...options) {
    // Step 3: Combine the required information and additional properties into a single object
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Adding the additional options to the car object
    for (let [key, value] of options) {
        car[key] = value;
    }
    return car;
}
// Step 4: Call the function with the required information and additional properties
let car1 = createCar("Toyota", "Camry", ["color", "Blue"], ["year", 2021]);
let car2 = createCar("Tesla", "Model 3", ["color", "Red"], ["autopilot", true]);
let car3 = createCar("Ford", "Mustang", ["color", "Black"], ["convertible", true]);
// Print the objects to verify the information
console.log(car1);
console.log(car2);
console.log(car3);
