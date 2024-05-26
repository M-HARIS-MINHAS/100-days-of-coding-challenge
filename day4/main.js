"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//question no 10:Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
//If you don’t have anything specific to write because your programs are too simple at this point, 
//just add your name and the current date at the top of each program file. Then write one sentence
//describing what the program does.
//5/14/2024
// this program print the userName
let userName1 = "haris";
console.log(`my name is ${userName1}`);
//question no 11: Names: Store the names of a few of your friends in a array called names.
//Print each person’s name by accessing each element in the list, one at a time.
let names = ["hashir", "asad", "anus", "ali", "maaz"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//question no 12:Greetings: Start with the array you used in Exercise 11, but instead of just 
//printing each person’s name, print a message to them. The text of each message should be the same, 
//but each message should be personalized with the person’s name.
let friendsName = ["hashir", "asad", "anus", "ali", "maaz"];
for (let i = 0; i < friendsName.length; i++) {
    console.log(`my name ${friendsName[i]}`);
}
