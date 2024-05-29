"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//question no 13:Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a 
//car, and make a list that stores several examples. Use your list to print a series of statements about 
//these items, such as “I would like to own a Honda motorcycle.”
let favoriteTransporation = ["Honda motorcycle", "coralla car", "hayabusa bike"];
for (let i = 0; i < favoriteTransporation.length; i++) {
    console.log(`L will like to own a ${favoriteTransporation[i]}`);
}
//question no 14:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
//Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
// Array of people to invite to dinner
// first method for_loop
let guestList = ["hashir", "asad", "anus", "ali", "maaz"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`${guestList[i]} would you like to join me for dinner?`);
}
// second method for_each
let guestList1 = ["hashir", "asad", "anus", "ali", "maaz"];
guestList1.forEach(invitations => {
    console.log(`${invitations} would you like to join me for dinner?`);
});
//question no 15:Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list
let guestList2 = ["hashir", "asad", "anus", "ali", "maaz"];
let notGuest = guestList1.splice(1, 1)[0];
console.log(`${notGuest} not coming in dinner`);
guestList1.push("tabish");
console.log(guestList1);
guestList1.forEach(invitations => {
    console.log(`${invitations} would you like to join me for dinner?`);
});
