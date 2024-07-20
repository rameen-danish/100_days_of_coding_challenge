/*Question28: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.*/
console.log("\n \t \t Question28 ");
let age = 66;
if (age < 2) {
    console.log("The person is a baby");
}
else if (age < 4) {
    console.log("The person is a toddler");
}
else if (age < 13) {
    console.log("The person is a kid");
}
else if (age < 20) {
    console.log("The person is a teenager");
}
else if (age < 65) {
    console.log("The person is an adult");
}
else {
    console.log("The person is an elder");
}
/*Question29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
console.log("\n \t \t Question29 ");
let favourite_fruits = ["Mango", "Pear", "Strawberry", "Apple", "Orange"];
if (favourite_fruits[0] === "Mango") {
    console.log("I really like Mango.");
}
else {
    console.log("I did'nt like Mango.");
}
if (favourite_fruits[1] === "Pear") {
    console.log("I really like Pear.");
}
else {
    console.log("I did'nt like Pear.");
}
if (favourite_fruits[2] === "Grapes") {
    console.log("I really like Grapes.");
}
else {
    console.log("I did'nt like Grapes.");
}
if (favourite_fruits[3] === "Melon") {
    console.log("I really like Melon.");
}
else {
    console.log("I did'nt like Melon.");
}
if (favourite_fruits[4] === "Orange") {
    console.log("I really like Orange.");
}
else {
    console.log("I did'nt like Orange.");
}
/*Question30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
console.log("\n \t \t Question30 ");
let user_name = ["John", "Eric", "Admin", "Charles", "William"];
user_name.forEach(user_name => {
    if (user_name == "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user_name},thank you for logging in again.`);
    }
});
export {};
