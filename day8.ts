//Question22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
console.log("\n \t \t Question22 ")
let iceCream : string[] = ["vanilla", "chocolate", "kulfa", "pista"]
console.log(`I would like to eat ${iceCream[4]} ice cream`);          // Intentional error: Arrays are zero-indexed, so index 4 is out of bounds.
console.log(`I would like to eat ${iceCream[1]} ice cream`);         // Correcting the error by accessing a valid index.
 
/*Question23: onditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
console.log("\n \t \t Question23 ")
let subject = 'english';
console.log("Is subject == 'english'? I predict True.")
console.log(subject == 'english')
console.log("Is subject == 'urdu'? I predict False.")
console.log(subject == 'urdu')

let animal = 'Lion';
console.log("Is animal == 'Lion'? I predict True.")
console.log(animal == 'Lion')
console.log("Is animal == 'Tiger'? I predict False.")
console.log(animal == 'Tiger')

let book = 'The Power of Habit';
console.log("Is book == 'The Power of Habit'? I predict True.")
console.log(book == 'The Power of Habit')
console.log("Is book == 'Think and Grow Rich'? I predict false.")
console.log(book == 'Think and Grow Rich')

let city = 'Karachi';
console.log("Is city == 'Karachi'? I predict True.")
console.log(city == 'Karachi')
console.log("Is city == 'Lahore'? I predict False.")
console.log(city == 'Lahore')

let country = 'Pakistan';
console.log("Is country == 'Pakistan'? I predict True.")
console.log(country == 'Pakistan')
console.log("Is country == 'China'? I predict False.")
console.log(country == 'China')

/*Question24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
s */
console.log("\n \t \t Question24 ")
// Tests for equality and inequality with string
console.log("Equality and Inequality test:");
console.log("birds"=="birds");
console.log("birds"!="birds");

//Tests using the lower case function
console.log("Lower case function Test:");
console.log("BIRDS".toLowerCase() =="birds");

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Numerical Test: ");
console.log(5==5);
console.log(5!=5);
console.log(5>2);
console.log(5<20);
console.log(5>=5);
console.log(5<=2);

//Tests using "and" and "or" operators
console.log("Logical Operator test")
let age = 20
console.log(age<20  && age>10 );
console.log(age<20 || age>10);

//Test whether an item is in an array
console.log("Array testing")
let numbers :number[]=[2,4,6,8];
console.log("Is '2' is in an array? ");
console.log(2 in numbers);

//Test whether an item is not in a array
console.log("Is '10'  in an array?");
console.log(10 in numbers);
