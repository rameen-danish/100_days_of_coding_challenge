/*Question34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/
console.log("\n \t \t Question34 ")
let pizza: string[] = ["Fajita","Afghani","Cheesy"];
pizza.forEach(pizza =>
    {
        console.log(`I like ${pizza} pizza.`)
    }
)
console.log("I really love pizza.")

/*Question35: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!*/
console.log("\n \t \t Question35 ")
let animal : string[] = ["Dog","Cat","Cow"]
animal.forEach(animal =>
    {
        console.log(`A ${animal} would make a great pet.`);
    }
)
console.log("Any of these animals would make a great pet!");

/*Question36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.*/

console.log("\n \t \t Question36 ")
function make_shirt(size:string ,message:string){
    console.log(`Make a '${size}' size shirt and print a message '${message}' on the front side of the shirt.`)
}
make_shirt("Medium","Karachi Kings")