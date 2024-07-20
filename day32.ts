/*Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.*/
console.log("\n Question 94:");
let words : string[] = ["Coding","TypeScript","JavaScript","Programming"];            //creating an array of words
let lengths : number[] = words.map(word=>word.length);                                //using .map() method to find the length of each word in an array
console.log(words);
console.log(lengths);

/*Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.*/
console.log("\n Question 95:");
function greaterThan10(arr:number[]):number[]{
    return number.filter(number => number > 10)              //this function filters an array ,keeping only numbers greater than 10
}
let number : number[] = [15,8,31,14,5,9,26];
console.log(greaterThan10(number));

/*Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array*/
console.log("\n Question 96:");
function calculateSum(number:number[]):number{
    return number.reduce((accumulator,current) => accumulator+current , 0);   //it adds up all the numbers in an array,resulting in a  single sum value
}
console.log(calculateSum(number));
