"use strict";
//question no 31:No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
Object.defineProperty(exports, "__esModule", { value: true });
//• Remove all of the usernames from your array, and make sure the correct message is printed.
let usernames = [];
if (usernames.length > 0) {
    console.log(`hello ${usernames}`);
}
else {
    console.log("we need to find some user");
}
/*question no 32:Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.*/
let current_users = ["haris", "asad", "anus", "umar", "usman"];
let new_users = ["haris", "hashir", "hasham", "usman", "ali"];
new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() == newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
/*question no 33:Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// Store the numbers 1 through 9 in an array*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let ordinal;
    // Use an if-else chain to determine the proper ordinal ending
    if (number === 1) {
        ordinal = number + "st";
    }
    else if (number === 2) {
        ordinal = number + "nd";
    }
    else if (number === 3) {
        ordinal = number + "rd";
    }
    else {
        ordinal = number + "th";
    }
    // Print each result on a separate line
    console.log(ordinal);
}
