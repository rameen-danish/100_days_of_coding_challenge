/*Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.*/
function AverageScoreCalculator(...score) {
    let total = score.reduce((sum, score) => sum + score, 0); //Add all score together
    return total / score.length; // divide total score by score length
}
console.log(AverageScoreCalculator(70, 85, 78, 80, 82)); //calling a func and showing it
/*Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.*/
// This program makes a function that adds a specific number
// We made a function (magic box) that adds 5 to any number.
function makeAdder(valueToAdd) {
    // This is the magic box. It takes a number and adds your special number to it
    return function (num) {
        return num + valueToAdd;
    };
}
// Making a magic box that adds 5
let addFive = makeAdder(5);
console.log(addFive(10)); // If we put 10 in the box, it gives us 15
//Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
let userProfile = (function () {
    let name = "Rameen";
    let age = 25;
    return {
        displayInfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();
userProfile.displayInfo();
export {};
