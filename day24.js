/*Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.*/
function numbersWithLet() {
    for (let num = 1; num <= 5; num++) {
        console.log(num);
    }
}
numbersWithLet();
/*Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.*/
let num1 = 5;
console.log(num1);
num1 = 10;
console.log(num1);
const num2 = 15;
try {
    // num2 = 16; //This line will cause an error because we can't reassign a const declared variable 
}
catch (error) {
    console.log("Error : Can't reassign a const declared variable.");
}
/*Question 72: Block Scope with `let` and `const`: Demonstrate block scope by creating a code block with `{}` that uses both `let` and `const`. Show how variables declared inside the block are not accessible outside of it.*/
// Demonstrating block scope
{
    let blockLet = "visible inside the block";
    const blockConst = "also only inside the block";
    console.log(blockLet); // Works fine here
    console.log(blockConst); // Also works fine here
}
try {
    // console.log(blockLet); // This will fail
}
catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}
try {
    //  console.log(blockConst); // This will also fail
}
catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}
export {};
// This shows that `let` and `const` keep variables safe inside the block where they're defined.
