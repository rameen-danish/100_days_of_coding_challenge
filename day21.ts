//Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
enum vehiclesType {                      // Making a list (enum) for different types of vehicles
    Car,
    Truck,
    Motorcycles
}
console.log(vehiclesType.Car);           // It shows 0 because enums start counting from 0
console.log(vehiclesType.Motorcycles);    // It shows 2 

/*Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.*/
interface Student {                //Blueprint
    name:string;
    age:number;
    courses:string[];
}
let student : Student ={            //Filling the Blueprint
    name: "Rameen",
    age:25,
    courses:["HTML","CSS","Java Script"]
}
console.log(student);           //Showing the student information

/*Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.*/
type Shape = {                              //Creating a custom type
    kind: "Circle" | "Rectangle";
    radius?:Number;
    height?:Number;
    width?:Number;
}; 
let circle : Shape  = {                      //Describing a  circle with our shape type
    kind: "Circle",
    radius:5
};
let rectangle : Shape = {                   //Describing a rectangle with our shape type
    kind: "Rectangle",
    height:5,
    width:10
};
console.log(circle);                        //Showing cirlce
console.log(rectangle);                    // Showing Rectangle

