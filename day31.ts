/*Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.*/
console.log("\n Question 91:");
let favFruits = ["Apple","Mango","Pear"];                     //creating an array with three fruits 
favFruits.push("Strawberry");                                 //this method add new fruit to the end of the array
console.log(favFruits);

/*Question 92: Write a function to remove the last element from an array and return the removed element.*/
console.log("\n Question 92:");
function removedElement<T>(arr:T[]):T|undefined{                 
    return arr.pop();                                           //removing last element from array
}
console.log(removedElement(favFruits));

/*Question 93: Find the index of "Mango" in an array of fruits and replace it with "Banana".*/
 console.log("\n Question 93:");
function replaceBananaWithMango(fruits: string[]): void {
    const index = fruits.indexOf("Banana");                                 // Finds the index of "Banana"
    if (index !== -1) fruits[index] = "Mango";                              // Replaces "Banana" with "Mango" if found
}
const fruits: string[] = ["Apple", "Banana", "Cherry"];
console.log(fruits)                                           // Outputs: ['Apple', 'Banana', 'Cherry'}
replaceBananaWithMango(fruits);
console.log(fruits);                                          // Outputs: ['Apple', 'Mango', 'Cherry'}