//Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var vehiclesType;
(function (vehiclesType) {
    vehiclesType[vehiclesType["Car"] = 0] = "Car";
    vehiclesType[vehiclesType["Truck"] = 1] = "Truck";
    vehiclesType[vehiclesType["Motorcycles"] = 2] = "Motorcycles";
})(vehiclesType || (vehiclesType = {}));
console.log(vehiclesType.Car); // It shows 0 because enums start counting from 0
console.log(vehiclesType.Motorcycles); // It shows 2 
let student = {
    name: "Rameen",
    age: 25,
    courses: ["HTML", "CSS", "Java Script"]
};
console.log(student); //Showing the student information
let circle = {
    kind: "Circle",
    radius: 5
};
let rectangle = {
    kind: "Rectangle",
    height: 5,
    width: 10
};
console.log(circle); //Showing cirlce
console.log(rectangle); // Showing Rectangle
export {};
