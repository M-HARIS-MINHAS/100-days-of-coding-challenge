"use strict";
//question no 22:Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let friends = ["haris", "usman", "zimal"];
console.log(friends[4]); // Intentional error: Arrays are zero-indexed, so index 4 is out of bounds.
console.log(friends[1]); // Correcting the error by accessing a valid index.
/*question no 23;Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
let car11 = 'subaru';
let bike12 = 'yamaha';
let fruit13 = 'apple';
let number10 = 10;
let number20 = 20;
let city14 = 'New York';
let country = 'USA';
let sportName = "football";
let age25 = 25;
let temperature75 = 75;
//statements that answer true
//car
console.log("Is car == 'subaru'? I predict True.");
console.log(car11 == 'subaru');
//bike
console.log("Is bike =='yamaha'? I predict True.");
console.log(bike12 == 'yamaha');
//fruit
console.log("Is fruit == 'apple'? l predict True.");
console.log(fruit13 == 'apple');
//number 1,number 2
console.log("Is 'number1'< 'number2'? Is predict True");
console.log(number10 < number20);
//city
console.log("Is city == 'New York'? I predict True.");
console.log(city14 == 'New York');
//statements that answer false
//country
console.log("Is country == 'karachi'? I predict False.");
console.log(country == 'karachi');
//is Raining
console.log("Is Raining == 'false'? I predict FALSE.");
console.log(sportName == 'cricket');
//age
console.log("age >= 16? I predict FALSE.");
console.log(age25 <= 16);
//temperature
console.log(" temperature <= 100 ? I predict FALSE.");
console.log(temperature75 >= 100);
//age and temprature
console.log(" age >= temperature ? I predict FALSE.");
console.log(age25 >= temperature75);
/*question no 24:More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
let car = 'Subaru';
let bike = 'Yamaha';
let fruit = 'Apple';
let number1 = 10;
let number2 = 20;
let age = 25;
let temperature = 75;
let colors = ['red', 'green', 'blue'];
let city = 'new york';
//Tests for equality and inequality with string
//car (true statement)
console.log("Testing equality with strings:Is car == 'subaru'? I predict True.");
console.log(car == 'Subaru');
//bike (true statement)
console.log("Testing equality with strings:Is bike =='yamaha'? I predict True.");
console.log(bike == 'Yamaha');
//fruit (true statement)
console.log("Testing equality with strings:Is fruit == 'apple'? l predict True.");
console.log(fruit == 'Apple');
//fruit (False statement)
console.log("Testing equality with strings:Is fruit == 'apple'? l predict False.");
console.log(fruit == 'apple');
//bike (False statement)
console.log("Testing equality with strings:Is bike =='yamaha'? I predict False.");
console.log(bike == 'yamaha');
//Tests using the lower case function
//car (true statement)
console.log("Tests using the lower case function:Is car.toLowecase == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');
//bike (true statement)
console.log("Tests using the lower case function:Is bike.toLowecase == 'subaru'? I predict True.");
console.log(bike.toLowerCase() == 'yamaha');
//city (true statement)
console.log("Tests using the lower case function:Is city.toLowecase == 'subaru'? I predict True.");
console.log(city.toLowerCase() == 'new york');
//fruit (False statement)
console.log("Tests using the lower case function:Is fruit.toLowecase == 'subaru'? I predict False.");
console.log(city.toLowerCase() == 'Apple');
//car (False statement)
console.log("Tests using the lower case function:Is car.toLowecase == 'subaru'? I predict False.");
console.log(car.toLowerCase() == 'Subaru');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//number1 and mumber2 (true statement)
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:Is car == 'subaru'? I predict true.");
console.log(car == 'Subaru');
//number1 and mumber2 (false statement)
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:Is car != 'subaru'? I predict False.");
console.log(car != 'Subaru');
//temperature and age (true statement)
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:Is temperature > age? I predict True.");
console.log(temperature > age);
//temperature and age (false statement)
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:Is temperature < age? I predict False.");
console.log(temperature < age);
//number 1 and temperature(true statement)
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:Is temperature >= age? I predict True.");
console.log(temperature >= number1);
// number 2 and age
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:Is temperature <= age? I predict False.");
console.log(temperature <= number1);
//Tests using "and" and "or" operators 
// AND operator && (true statement)
console.log("Tests using 'and' and 'or' operators:Is num3 && num4 ? I predict True.");
let num3 = number1 < number2;
let num4 = number1 == 10;
console.log(num3 && num4);
//AND operator && (false statement)
console.log("Tests using 'and' and 'or' operators:Is num5 && num6 ? I predict False.");
let num5 = number1 > number2;
let num6 = number1 == 10;
console.log(num5 && num6);
// OR operator || (true statement)
console.log("Tests using 'and' and 'or' operators:Is num7 || num8 ? I predict True.");
let num7 = number1 < number2;
let num8 = number1 == 10;
console.log(num7 && num8);
// OR operator || (false statement)
console.log("Tests using 'and' and 'or' operators:Is num9 || num10 ? I predict True.");
let num9 = number1 > number2;
let num10 = number1 == 20;
console.log(num9 && num10);
//Test whether an item is in a arraylet 
// red (true statement)
console.log("Test whether an item is in a arrayle:colors.includes(red) ? I predict True.");
console.log(colors.includes('red'));
// green (true statement)
console.log("Test whether an item is in a arrayle:colors.includes('green') ? I predict True.");
console.log(colors.includes('green'));
// blue (true statement)
console.log("Test whether an item is in a arrayle:colors.includes('blue') ? I predict True.");
console.log(colors.includes('blue'));
//Test whether an item is not in a array
//red (False statement)
console.log("Test whether an item is in a arrayle:colors.includes(red) ? I predict False.");
console.log(!colors.includes('red'));
//red (False statement)
console.log("Test whether an item is in a arrayle:colors.includes(green) ? I predict False.");
console.log(!colors.includes('green'));
//red (False statement)
console.log("Test whether an item is in a arrayle:colors.includes(blue) ? I predict False.");
console.log(!colors.includes('blue'));
