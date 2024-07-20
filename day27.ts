/*Question 79:** Creating and Accessing Object Properties: Construct an object representing a car with properties for `make`, `model`, and `year`. Then, show how you can access the `model` property of the car.*/
let car : {make:string ,model:string,year:number,colour?:string} = {    //creating object
    make:"Toyota",
    model:"Corolla",
    year:2020,
};
console.log("\n Question 79:",car.model);                            //Accessing object property

/*Question 80:** Updating Object Properties: Add a property named `color` to the existing car object, and then update the `year` property to `2021`. Show how to perform these operations.*/
car.year = 2021 ;                          //updating object property value
car.colour = "Black";                      //add new property in object
console.log("\n Question 80 :",car,"\n");

/*Question 81:** Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.*/

console.log("\n Question 81:");

let obj ={ make: "Toyota", model: "Corolla", year: 2021, color: "blue" };

function logObjectProperties(obj:any) {                                     // This function shows every detail about an object
    for (let property in obj) {                                           // Loops through each property in the object
        console.log(` ${property}: ${obj[property]}`);                     // Shows the property name and its value
    }
}
logObjectProperties(obj);                                                 // It tells us each piece of information stored about the car.
