/*Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.*/
let smartphone = {       // setup details about smartphone
    brand:"Techno",
    model:"Camoni7",
    features:{
        storage:"128GB",
        screenSize:"6.6 inches",
        batteryLife:"5000 mAh"
    }
};
console.log(smartphone);         //shows the details about smartphone

/*Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.*/
let developerSkills = {                                            //A list showing programmer skills in details
    languages : ["JavaScript","TypeScript","Python"],
    frameWorks : ["React","Angular","Vue"],
    tools : ["Git","WebPack","Docker"]
};
let {languages,frameWorks,tools} = developerSkills ;               //Getting specific skills from list
console.log(`Language: ${languages[1]}, FrameWork: ${frameWorks[1]}, Tool: ${tools[1]}.`);  // showing  a skill from each category at 1 index

/*Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.*/
function CreateObjectWithDynamicKey(key:string,value:string){            // a way to make a flexible list
    let dynamicObject :any = {};
    dynamicObject[key]=value;                                           //setting up a section in the list with changeable name
    return dynamicObject ;
}
let userPreference = CreateObjectWithDynamicKey("Theme","Dark");        //using felxible list for user's preference
console.log(userPreference);                                            //showing user's choice

