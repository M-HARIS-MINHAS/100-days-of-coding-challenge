// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model,
// year, and a method describe() that logs a sentence about the laptop.
let laptop = {
    make: "HP-34",
    model: "i7-12",
    year: 2024,
    method: function () {
        console.log(`this is my laptop,this ${laptop.year} and ${laptop.model} and it company is ${laptop.make}`);
    }
};
laptop.method();
//Question 47:Advanced Array Destructuring: Given an array of objects representing different laptops,
//each with properties make, model, and year, use array destructuring to assign the first and second
//laptops to variables. Then, log these variables.
let laptops = [
    { make: "Apple", model: "MacBook Pro", year: 2023 },
    { make: "Dell", model: "XPS 13", year: 2022 },
    { make: "HP", model: "Spectre x360", year: 2021 },
];
let [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);
// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two
//different sets of laptops. Use the spread operator to combine these arrays into a single array
//sorted in ascending order, then log the result.
let pricesSet1 = [1200, 1500, 1100];
let pricesSet2 = [1000, 1300, 1600];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinedPrices);
export {};
