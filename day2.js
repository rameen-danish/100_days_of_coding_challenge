// Question4 : Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log("\n \t \t Question4 ");
console.log('Abraham Lincoln once said, "Whatever you are, be a good one."');
// Question5 : Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
console.log("\n \t \t Question5 ");
let famous_person = "Abraham Lincoln";
let message = `${famous_person} once said, "Whatever you are, be a good one."`;
console.log(message);
// Question6 : Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces
console.log("\n \t \t Question6 ");
let name1 = "\t\n Rameen \t\n";
console.log(name1);
console.log(name1.trim());
export {};
