/*Question31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
console.log("\n \t \t Question31 ");
let user_name = [];
if (user_name.length === 0) {
    console.log("We need to find some users!");
}
else
    console.log("Thank you for login");
/*Question32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
console.log("\n \t \t Question32 ");
let current_users = ["John", "Eric", "Admin", "Charles", "William"];
let new_users = ["ADmin", "Vicky", "Pascal", "Eric", "John"];
new_users.forEach(newUsers => {
    if (current_users.some(currentUsers => currentUsers.toLowerCase() === newUsers.toLowerCase())) {
        console.log(`'${newUsers}' you will need to enter a new user name.`);
    }
    else {
        console.log(`'${newUsers}' is avaailable.`);
    }
});
/*Question33: Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/
console.log("\n \t \t Question33 ");
let ordinal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ordinal.forEach(ordinal => {
    let suffix = 'th';
    if (ordinal === 1) {
        suffix = "st";
    }
    else if (ordinal === 2) {
        suffix = "nd";
    }
    else if (ordinal === 3) {
        suffix = "rd";
    }
    console.log(`${ordinal}${suffix}`);
});
export {};
