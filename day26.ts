/*Question 76:** Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.*/
function addNumber(num1:number ,num2:number):number{
    return num1 + num2 ;
}
let result = addNumber(2,5);
console.log("Addition of two numbers =",result);

/*Question 77:** Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.*/
function greet(name:string = "Anonymous"){
    console.log(`Hello ${name}`);
}
greet("Rameen");
greet();

/*Question 78:** Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.*/
         //Function Declaration
function squareNumber(num:number):number{
    return num*num ;
}
        //Function Expression
let square  = function(num1:number):number{
    return num1 * num1 ;
}
console.log(squareNumber(5));
console.log(square(6));

