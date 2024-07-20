/*Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.*/
console.log("\n Question 88:");
function rounding(deci) {
    return Math.round(deci); // This function rounds a decimal number to the nearest whole number
}
;
console.log(rounding(45.8026)); //output is 46
console.log(rounding(45.4026)); //oooutput is 45
/*Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.*/
console.log("\n Question 89:");
function convertingString(str) {
    return parseFloat(str); // This function changes a string into a number
}
console.log(convertingString("234")); //output is 234
console.log(convertingString("20.56")); //output is 20.56
/*Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.*/
console.log("\n Question 90:");
function checkingNaN(value) {
    return isNaN(value); // This function checks if a value is Not a Number (NaN)
}
console.log(checkingNaN("Code")); //Outputs: true, because "Code" isn't a number
console.log(checkingNaN(15)); //Outputs: false, because 15 is a number
export {};
