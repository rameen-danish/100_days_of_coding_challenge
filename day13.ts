/*Question37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
console.log("\n \t \t Question37 ")
function make_shirt(size:string = "large",message:string ="I Love Typescript"){
    console.log(`Make a '${size}' size shirt and print a message '${message}' on the front side of the shirt.`)
}
make_shirt()                               //Default Large , default message
make_shirt("Medium")                       //medium , default message
make_shirt("small","Karachi Kings")         //custom size , custom message

/*Question38: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.*/
console.log("\n \t \t Question38 ")
function describe_city(city:string,country:string="Pakistan"){
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi")
describe_city("Islamabad")
describe_city("Macca","Saudi Arab")

/*Question39: City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/
console.log("\n \t \t Question39 ")
function city_country(city:string , country:string) : string {
    return `'${city}, ${country}'`
}
console.log(city_country("Karachi","Pakistan"));
console.log(city_country("Lahore","Pakistan"));
console.log(city_country("Paris","France"));