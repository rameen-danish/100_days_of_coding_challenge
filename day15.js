/*Question43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
console.log("\n \t \t Question43 ");
let magicians_name = ["David", "John", "Chris", "Max"];
function show_magicians(magicians_name) {
    magicians_name.forEach(magicians_name => {
        console.log(magicians_name);
    });
}
function make_great(magicians_name) {
    let greatMagician = [];
    magicians_name.forEach(magicians_name => {
        greatMagician.push(`${magicians_name} , the Great Magician`);
    });
    return greatMagician;
}
let greatMagician = make_great(magicians_name.slice()); //creates a new modified array
console.log("Original Magicians :");
show_magicians(magicians_name); // shows original name
console.log("Great Magician :");
show_magicians(greatMagician); //shows modified name
/*Question44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*/
console.log("\n \t \t Question44 ");
function make_sandwich(...items) {
    console.log(`Making a Sandwich with: ${items.join(',')}.`);
}
make_sandwich("Cheese", "Mayo", "Chicken");
make_sandwich("lettuce", "chilli sauce", "Butter");
make_sandwich("musturd", "mayo", "Cheese");
/*Question45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/
console.log("\n \t \t Question45 ");
function make_car(manufacturer, model, ...option) {
    let car = { manufacturer, model };
    option.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "Black"], ["year", 2024]));
console.log(make_car("Ford", "Fiesta", ["color", "Grey"], ["sunroof", true]));
export {};
