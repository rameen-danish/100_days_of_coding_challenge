/*Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.*/
console.log("\n Question 85:");
function occurrenceOfWord(str) {
    return str.indexOf("code"); //it tells the starting position of the word "code" in the string
}
console.log(occurrenceOfWord("I wants to learn code in TypeScript"));
/*Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.*/
// function wordChecking(str:string):boolean {
//     return str.includes("JavaScript");
// }
// console.log(wordChecking("I Love to code in JavaScript"));
/*Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.*/
console.log("\n Question 87:");
function subString(str) {
    return str.substring(0, 10); //starting from 0 index to 9th index and return a sub string of it
}
console.log(subString("Hello John,How are you?"));
export {};
