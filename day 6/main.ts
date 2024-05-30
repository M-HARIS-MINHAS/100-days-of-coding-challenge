/*question no 16:More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
let guestList1:string[] =["hashir", "asad", "anus",  ];
let dinner:string="l have a bigger dinner table"
console.log(dinner)
guestList1.unshift("maaz")
console.log(guestList1)
guestList1.splice(Math.floor(guestList1.length/2),0,"nouman")
console.log(guestList1)
guestList1.push("fawad")
console.log(guestList1)
  

/*question no 17:• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
let guestList:string[]=[ 'hashir', 'anus', 'tabish' ]
let removed_People= guestList.pop()
console.log(`${removed_People} sorry you can't invited for dinner`)
console.log(`${guestList} you are still invited`)
guestList.splice(0,2)
console.log(guestList)



/*question no:18Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/

let places: string[] = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];

console.log("Original order:", places);
console.log("Alphabetical order:",places.slice().sort())
console.log("Original order:", places);
console.log("reverse Alphabetical order:",places.slice().sort().reverse())
console.log("Original order:", places);
console.log("reverse order:",places.reverse())
console.log("reverse order:",places.reverse())
console.log("Alphabetical order:",places.sort())
console.log(" reverseAlphabetical order:",places.reverse ())
