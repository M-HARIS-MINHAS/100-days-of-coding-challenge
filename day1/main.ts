// day one of coding


//question 2 : Personal Message: Store a person’s name in a variable,
// and print a message to that person. Your message should be simple, 
// such as, “Hello Eric, would you like to learn some Python today?”
 let personName: string = "Eric";
 console.log(`Hello ${personName},would you like to learn some python today?`);
 
 
 
 //question 3 : Name Cases: Store a person’s name in a variable,
//and then print that person’s name in lowercase,uppercase, and titlecase.
let userName: string = "m haris";
console.log(userName.toUpperCase());
console.log(userName.toLocaleLowerCase());
console.log(userName.charAt(0).toUpperCase()+userName.slice(1).toLowerCase());