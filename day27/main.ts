//Question no 79:Creating and Accessing Object Properties: Construct an object 
//representing a car with properties for make, model, and year. Then, show how
// you can access the model property of the car.

let myCar ={
    make: "Toyota",
  model: "Corolla",
  year: 2024,
}
console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.year);



//Question no 80:Updating Object Properties: Add a property named `color` to the 
//existing car object, and then update the `year` property to `2021`. Show how to 
//perform these operations.
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color:"black"
  };
  
  
  car.color = "blue";
  car.year = 2021; 
  

  console.log(car); 

  
//Question 81: Iterating Over Object Properties: Write a function that takes an object as
// an argument and logs all of its properties and values.


function logObjectProperties(obj: object|any) {
    for (let property in obj) {
    
        console.log(`${property}: ${obj[property]}`);
        
    }
}


logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
