/*Question 73: Assigning and Updating Variables: Create a function where you declare a variable using `let` and assign an initial value. Then, update its value within the same function and log both the initial and updated values.*/
function updatingVariable() {
    let num = 15; //Assigning inital value in a variable using let
    console.log("Initial Value:", num);
    num = 26; //Updating value in same function
    console.log("Updated Value:", num);
}
updatingVariable();
/*Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables `a = 5` and `b = 10`, then swap their values so that `a` becomes `10` and `b` becomes `5`.*/
function swapValues() {
    let a = 5, b = 10;
    console.log("Before Swapping: \n a =", a, ", b =", b);
    let c = a; //c temporarily stores the value of a 
    a = b; // set a to b value
    b = c; // now b stores the original value of a which is stored in c 
    console.log("After Swapping: \n a =", a, ", b =", b);
}
swapValues();
/*Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with `x = 4` and perform a series of operations (addition, subtraction, multiplication, division) on `x` using compound operators.*/
function compoundOperators() {
    let x = 4;
    console.log("Initial Value of x :", x);
    x += 2;
    console.log("After Addition Value of x :", x);
    x -= 4;
    console.log("After Subtraction Value of x :", x);
    x *= 5;
    console.log("After Multiplication Value of x :", x);
    x /= 2;
    console.log("After Division Value of x :", x);
}
compoundOperators();
export {};
