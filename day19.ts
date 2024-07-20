/*Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.*/
let number : number[] = [2,4,6,8,10];                               //List of numbers
let doubleNumbers = number.map(numbers => numbers * 2);             //new list which doubles each number
console.log(doubleNumbers);                                         //showing new list of double numbers

/*Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.*/
let mixedArray = ["Apple",true,15,"Mango",false,"Banana",26,"Orange"];                      //Array of mixed items of different data types
let stringArray = mixedArray.filter(item => typeof item === "string");                      //new array that filter out only string type items
console.log(stringArray);                                                                   //showing just string type items

/*Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.*/
let grades = [78,85,89,70,90,88];                                                            //list of grades
let averageGrade = grades.reduce((total,grade) => total+grade,0) / grades.length ;           //first , we add up all grades,then we divide it by how many grades are there to get average
console.log(averageGrade);                                                                   //Showing average grades