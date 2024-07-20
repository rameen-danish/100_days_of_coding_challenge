/*Question 67:Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., `"5"`). Return their sum as a number. */
function addStringAndNumber(num:number , numString:string):number{
    return num + Number(numString);
}
console.log(addStringAndNumber(5,"10"));

/*Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.*/
function multiplyingDecimals(num1:number ,num2:number) : number {
    return Math.round((num1*num2)*100) /100 ;
}
console.log(multiplyingDecimals(0.1,0.2));


/*Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.*/
function divide(dividend:number , divisor:number) : {quotient:number ; remainder:number} {
  let quotient = Math.floor(dividend/divisor);
  let remainder = dividend % divisor;
  return {quotient,remainder};
}
console.log(divide(25,3));


