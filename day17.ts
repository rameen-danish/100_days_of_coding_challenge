/*Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.*/
function LogHobby(...hobbies:string[]){
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}`);
    });
}
LogHobby("Coding","Reading","Travelling");

/*Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.*/
let myIdealDay = `My Ideal Day would involve these activities:
1.Waking up early in the morning.
2.Make lunch and dinner for family.
3.Spend leisure time with family.
4.Doing some coding. 
5.End with going for eating an ice-cream.`;
console.log(myIdealDay);

/*Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.*/
function areaOfRectangle(length:number , breadth:number):number{
    return length*breadth ;
}

let CalculateArea = (length:number , breadth:number):number => length*breadth ;
 
console.log(areaOfRectangle(9,7));
console.log(CalculateArea(5,9));
