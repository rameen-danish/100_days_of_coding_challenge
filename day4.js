// Question10 : Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does. 
//Rameen, 5/4/2024
//This program print my favourite number
console.log("\n \t \t Question10 ");
let favourite_Number = 15;
let message2 = `My favourite number is ${favourite_Number}`;
console.log(message2);
// Question11 : Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log("\n \t \t Question11 ");
let names = ["Ayesha", "Areeba", "Zaeema", "Huma", "Sehrish"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Question12 : Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("\n \t \t Question12 ");
let names1 = ["Ayesha", "Areeba", "Zaeema", "Huma", "Sehrish"];
for (let i = 0; i < names1.length; i++) {
    console.log(`Hello ${names[i]} , Would you like to learn some typescrpit today?`);
}
export {};
