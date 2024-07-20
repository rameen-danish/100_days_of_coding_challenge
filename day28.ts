/*Question 82: Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string*/
function findLengthOfString(str:string):number {
        return str.length;                                               //it returns the length of string 
}
console.log("\n Question 82 :");
console.log(findLengthOfString("I am a student"));

/*Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.*/
console.log("\n Question 83:");
function convertString(str:string){
    let upperCase = str.toUpperCase();                                           //it converts string into lower case
    let lowerCase = str.toLowerCase();                                          //it converts string into upper case
    console.log(`Upper case: ${upperCase} , lower case: ${lowerCase}`);
}
convertString("I am a Student");

/*Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".*/
console.log("\n Question 84:")
function replaceWord(str:string):string{
    return str.replace(/JavaScript/g,"Typescript");                           // it replaces the word JavaScript into TypeScript
}
console.log(replaceWord("I wants to learn JavaScript , and I work on JavaScript"));

