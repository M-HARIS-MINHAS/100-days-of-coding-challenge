"use strict";
//Question 61: Making Enums for Vehicles: Let's create categories for
// vehicles like cars, trucks, and motorcycles using enums, and show one example.
/*
enum Vehicles{
    car,
    motorcycle,
    truck
}
console.log(Vehicles.car)
console.log(Vehicles.motorcycle)
console.log(Vehicles.truck)



// Question 62: Making a Student Template: Create a blueprint for student information,
//  including their name, age, and the classes they're taking, and then fill in this
//  blueprint with an example student.

interface student{
    name:string;
    age:number;
    courses:string[];
}

let bioData:student={
    name: "M haris",
    age : 15,
    courses:["english","urdu","math"]
}
console.log(bioData)*/
Object.defineProperty(exports, "__esModule", { value: true });
let circle = {
    kind: "circle",
    radius: 5
};
let rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20
};
console.log(circle);
console.log(rectangle);
