//Question19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("\n \t \t Question19 ")
let Guest : string[] = ["Bismah","Rushna","Faaiz","Daniyal","Abeeha"]
console.log(`${Guest.length} guests are invited for the dinner.`);

//Question20: Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
console.log("\n \t \t Question20 ")
let languages : string[] = ["Typescript","Javascript","HTML","CSS"];
console.log(`I would like to learn these languages : [${languages}]`);

//Question21: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
console.log("\n \t \t Question21 ")
let mobile : {
    model:string ; releaseDate:string ; price:number;
}=
{
    model:"Samsung Galaxy Note 20 Ultra",
    releaseDate:"05 August 2020",
    price:219999
};
console.log(`Mobile Info:${mobile.model} was released on ${mobile.releaseDate}, and the price of this mobile is PKR ${mobile.price}`);


