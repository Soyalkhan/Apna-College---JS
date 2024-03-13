// Question 1 : create a const object to store produt details
// const product = {
//     ProductName : "Lenovo ideaPad 5530",
//     Price : 45350,
//     Rating : 4.5,
//     Description : "This is Description Text here",
// }
// console.log(product); // printing whole object here
// console.log(product["Description"]); // printing key value of [Description] (acess the key inside the object)
// // Here we can change the value to key inside object
// product.Description= "Here we have changed the desription for the product key Description";
// console.log(" Access key "+ product.Price);

// Question 2 : create and object for instagram profile
/*const instaProfile = {
    userName : "The_soyal",
    isFollow : false,
    Followers : 1200,
    Following : 129
}

console.log(instaProfile);
console.log(instaProfile.Followers);

if(instaProfile.isFollow == true){
    console.log(" Your Followers : " + instaProfile.Followers + 1);
}else if(instaProfile.isFollow == false){
    console.log(" Your Followers : " + instaProfile.Followers - 1);
}
*/

// Ternary Operators

/* let age = 2;
let isAdult  = age > 18 ? "adult" : "Not adult";
console.log(isAdult) */

// if else
/* let sMarks = prompt("Enter your marks!")
if(sMarks >= 33){
    alert("Congrats you passed the exam!")
} else{
    alert("Better luck next time!")
}
*/

// For loop
//print 0 to 10 with for loop
/*for(i= 0;i<=10;i++){
    console.log(i);
}*/

//printing table using for loop
/* let tableNum = prompt("Enter an number you want a multipication");
for(i=1;i<=10;i++){
    console.log(tableNum,"X",i,"=",i*tableNum);
}
*/

//getting 5 subject number and check pass or fail passing marks 33
// prompt always stored string thats why using firstly covert the value to Integer using : parseInt
/* let studentNameString = prompt("Enter your name !");

let hinMarksString = prompt("Enter marks of hindi!");
let hindi = parseInt(hinMarksString);

let engMarksString = prompt("Enter marks of English!");
let eng = parseInt(engMarksString);

let mathMarksString = prompt("Enter marks of Math!");
let math = parseInt(mathMarksString);

let sstMarksString = prompt("Enter marks of SST!");
let sst = parseInt(sstMarksString);

let socialMarksString = prompt("Enter marks of Social Studies!");
let social = parseInt(socialMarksString);

let grandTotal = hindi + eng + math + sst + social;
let percent = grandTotal / 500 * 100;
let result = null;
// console.log("marks in hindi :" + hindi);
// console.log("marks in english :" + eng);
// console.log("marks in math :" + math);
// console.log("marks in sst :" + sst);
// console.log("marks in social :" + social);
console.log("Your Total Marks is :" + grandTotal);
console.log("Your total Percentage is :" + percent + "%");

if (hindi >= 33 | eng >= 33 | math >= 33 | sst >= 33 | social >= 33) {
    console.log("Contgarts your " + studentNameString + " pass the exam!");
    result = "Pass";
} else {
    console.log("Sorry unfortunatly" + studentNameString + " you failed in exam!");
    result = "Fail";
}


document.getElementById("name").innerHTML = studentNameString;
document.getElementById("hin").innerHTML = hindi;
document.getElementById("eng").innerHTML = eng;
document.getElementById("mat").innerHTML = math;
document.getElementById("sst").innerHTML = sst;
document.getElementById("sos").innerHTML = social;
document.getElementById("res").innerHTML = result;
*/

// Check odd or even number
// let num = 5;
// if (num % 2 === 0) {
//     console.log("even Number " + num);
// } else {
//     console.log("number is odd " + num);
// }

// else if

// let mode = "white";
// let mode_color;

// if (mode === "dark") {
//     mode_color = "black";
//     console.log("mode color is black");
// } else if (mode === "white") {
//     mode_color = "white";
//     console.log("mode color is white");
// } else if (mode === "blue") {
//     mode_color = "blue"
//     console.log("mode color is blue");
// } else {
//     mode_color = "Defalut_black"
//     console.log("mode color is Defalut_black");
// }

// ternary operator (in if condition)
// let age = 17;
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

// prectice question 1 : get a user input and check wheather is number is multiple is 5 of not

// let userInput = prompt("Enter an number");
// if(userInput % 5 ===0){
//     console.log(userInput,"multiple of 5");
// }else{
//     console.log(userInput,"is not multiple of 5");
// }

// prectice question 2 : write a code which give to grade according thier score (check notebook)

// let marks = prompt("Enter your marks");
// let grade;
// if (marks >= 90 && marks <= 100) {
//     grade = "A";
//     console.log(marks, "Your grade is:", grade);
// } else if (marks >= 70 && marks <= 89) {
//     grade = "B";
//     console.log(marks, "Your grade is:", grade);
// } else if (marks >= 60 && marks <= 69) {
//     grade = "C";
//     console.log(marks, "Your grade is:", grade);
// } else if (marks >= 50 && marks <= 59) {
//     grade = "D";
//     console.log(marks, "Your grade is:", grade);
// } else if (marks >= 0 && marks <= 49) {
//     grade = "F";
//     console.log(marks, "Your grade is:", grade);
// }

// Loop is JavaScript
//for loop

// for(i = 1;i<=10;i++){
//     console.log(i);
// }

// print sum of fisrst 5 n number
// let sum = 0;
// for(i = 1;i<=5;i++){
//     sum = sum + i;
// }
// console.log("sum of n numbers  1 to 5 is =", sum);

// while loop
// first define then condition check and then increment
// let i = 1; // declare the value before loop start
// while (i <= 15) { // check condition
//     console.log("soyal");
//     console.log("");//printing space
//     i++ // implimenting value
// }

// do while loop : it will run at once any how
// let i = 1; // define
// do{
//     console.log("soyal khan");
//     i++; // increment
// }while(i <= 1); // updation

// for of loop : using in string and arrays not use in objects

// we can calculate the length of str unig this
// let str = "SoyalKhan";
// let length = 0;
// for(let i of str){
//     console.log(i);
//     length++;
// }
// console.log("length of str is ", length);

// for in loop : unsing in objects and arrays
// let student = {
//     name : "soyal",
//     class : "10th",
//     mobile_number : "7535964612",
//     CGPA : 7.8,
//     isPass : true,
// }

// for(let i in student){ // it will print the whole object one by one and print keys
//     console.log(i);
// }

// // we can access keys object key something like this
// for(let key in student){
//     console.log("key=" , key , "value" , student[key]); // accessing key value pairs
// }

// Prectice Q : 1 Print all even number from 0 to 100;

// for (i = 0; i <= 100; i++) {
//     if (i % 2 == 0) { // printing even numbers only
//         console.log(i);
//     }
// }

// Prectice Q : 2 Print all even number from 0 to 100;

// for (i = 0; i <= 100; i++) {
//     if (i % 2 != 0) {  // printing odd numbers only
//         console.log(i);
//     }
// }

// Prectice Q : 3 guess the number;

// let computerNumber = 55;
// let userInput = prompt("Enter you number 0 to 100");
// while (userInput != computerNumber) {
//     userInput = prompt("You entered wrong number please enter again: ");

// }
// console.log("Congrats you win your no : ", userInput, "and computer number is : ", computerNumber);

// Prectice Q : 3 guess the number (diffrenet approch)

// let com = Math.floor((Math.random() * 100) + 1); // generating random number
// com = parseInt(com);// converting to int
// console.log("Compuer generated value", com); // print random number
// let user = prompt("enter you number");
// user = parseInt(user);
// while (user != com) {
//     if (user >= com) {
//         user = prompt("High value");
//     } else if (user <= com) {
//         user = prompt("low value");
//     } else if (user -= com == 1) { // not working
//         user = prompt("very very very close");
//     } else if (user -= com == 2) { // not working
//         user = prompt("very very close");
//     } else if (user -= com == 3) { // not working
//         user = prompt("very close");
//     }
// }
// if (user == com) {
//     alert("You win");
//     console.log("You win");
// }

// Strings in JS
// method in String in Js

// let fName = "Soyal"; // here soyal is string
// let lName = "Khan";

// console.log(fName);
// // to calculate the length of string use .length
// console.log("Length of soyal is : ", fName.length); // printing the length of string
// console.log(fName[0], fName[1], fName[2]);// prints the character of string one by one
// // accessing all charater at once using for each
// for (let i in fName) {
//     console.log(fName[i]);
// }

// // Template Literals (String Interpolation)
// console.log("This is my full name ${fName} ${lName}"); // in this you cant use template Literals
// console.log(`This is my full name ${fName} ${lName}`); // in this you cant use template Literals

// // String methods
// let fullName = fName.concat(lName); // join 2 value into one concatination
// console.log(fullName); // prints full name
// console.log(fullName.toUpperCase()); // converts all charcter to uppercase
// console.log(fullName.toLowerCase()); // converts all charcter to Lowercase
// let withSpace = "     withSpaces        "
// console.log(withSpace.trim()); // trims all white spaces from the start and
// console.log(fullName.slice(5, 9)); // prints "khan" only
// console.log(fullName.replace("Soyal", "Goyal")); // replace "Soyal" to "Goyal"
// console.log(fullName.charAt(4)); // returns l from "Soyal"

// Practice Q : prompt an full name and then add @ at start and add there length of full name at the end

// let fName = prompt("Enter you Full Name");
// //fName.replaceAll("  "), ("");// try to replace space if user entered spaces
// console.log(fName);
// let lengthOf_fName = fName.length;
// //console.log(lengthOf_fName);
// let userName = "@" + fName + lengthOf_fName;
// console.log(userName);
// alert("Your userName is : " + userName);

// Arrays in JS

// creating Arrays
// let emp_fName = ["soyal", "tushar", "shashank", "rohan", "mohit"];
// let marks = [33, 55, 11, 34, 11];
// let info = ["Soyal", 26, "24-07-1997", "Ghaziabad"];
// let toStr = marks.toString();// convert to toString value whole array

// console.log(emp_fName[0],emp_fName[1],emp_fName[2],emp_fName[3],emp_fName[4]);// printing array by defining index no

// //use loop in array to access array key
// // arrays with for of loop "when you want to print all the value"

// for(emp of emp_fName){ // here "emp is key to access in array"
//     console.log(emp.toUpperCase()); // print and convert to uppercase
// }
// console.log("For loop with index");
// for(let index =0;index < emp_fName.length; index++ ){
//     console.log(emp_fName[index].toUpperCase()); // print and covert to uppercase
// }

//Questions : 1 calculate the avrage marks of class
//     let sum = 0;
//     for(let classMarks of marks){
//         sum += classMarks;
//         console.log(classMarks);

//     }
//     console.log(`sum of total classMarks: ${sum}`);
//     let avg = sum / marks.length;
//     console.log(`avg is classMarks : ${avg}`);

//     let items = [399,499,599,299,199]
//     //Questions : 2 : create 5 products price and make an offer for 10% off and minus offer value from the product value
//
//    for(let i =0; i < items.length;i++){ // define array in itaration
//     console.log(items[i]); // print array with orignal value
//     let offer = items[i] / 10; // create offer 10% off by "399-10%=359.1"
//     items[i] -= offer; // assign new value with 10% off
//     console.log(items[i]); // print new value of array
//   }
// console.log(items); // we have re assigned new value into array so value has been changed

// Array methods in JS
//  let student = ["soyal","rohan","mohit","kumar"];
//  let marvel = ["ironMan","spiderMan","thor","captainAmerica"];
//  let DC = ["batMan","superhero","wonderWoman"];
//  let indianHeros = ["shaktiman","krish"]

// console.log(student);
// let addStudent = student.push("manish"); // by push() adding new array value (at the Last)
//  let addMultiple = student.push("manish","mohan","aman","pappu"); // adding multiple values into array
//console.log(student); // prints new arrat with added student value
// console.log(student[5],student[6],student[7],student[8]);  print new multiple added aray
// let deleted = student.pop(4)
// console.log("deleted",deleted,student); // deleted vaule "kumar" and return using new variable

// student = student.toString(); // convert to toString to whole array
// console.log(student);

// let heros = marvel.concat(DC,indianHeros); // Join all array into one (it will return an new value if you pass variable)
// console.log(heros);

// student.unshift("neha"); // will add value at start "like push method" (it will return an new value if you pass variable)
// console.log(student);
// student.shift(1); // remove from start given value from the array "like pop method"
// console.log(student);

// **************** important to understand ************
// while passing last value make sure pass required end number the next one
// like if you want to 1 to 3 so in slice(1,4) then it will reurn the required value

// let cut = student.slice(0,4);
// console.log(cut);
// let whole = student.slice(1);// return whole array value if you define only first value
// console.log(whole);
// let numbers = [1,2,3,4,5,6,7,8,9,10]
// let add_delete_replace = numbers.splice(2,2,200,300);
//console.log(numbers);

//Add element in array with slice
// numbers.splice(3,0,500) // add after "3rd" index cause we dont want to delete anything so "0" and vlaue is "500"
// console.log(numbers);

//Replace element in array with slice
// numbers.splice(1,1,200) // replace the "1" with 200
// console.log(numbers);

// // Delete Element in array with slice
// numbers.splice(9,9); // delete the array from the given index
// console.log(numbers);

/*Question : create an array to store companies
and then remove first company then remove "uber"
add ola and add amazon at the end */
// let companies = ["Microsoft", "uber", "Google", "gempact", "Capgimini"];
// console.log(companies);
// companies.splice(0, 1);
// console.log(companies);
// companies.splice(1,1,"ola")
// console.log(companies);
// companies.push("HCL");
// console.log(companies);

//Function in JS // very important

//  function fisrstFunction(x,y) {
//     console.log("Sum of 2 numbers :", x+y); // adding 2 numbers and print
// }
// fisrstFunction(5,6); // invoking 2 numbers

//function with return value

// function sum(x, y) {
//     s = x + y // adding 2 numbers and print
//     return s; // return will sent the task to sum() function and the we can invoke and print the value we want
// }
// let newVal = sum(4, 5); // we can store the new value as an varibale
// console.log(newVal);

// enter five number input by user and calculate percentage of it using function
/*
function calculatePercent() {
    let arr = [
        x = prompt("enter marks in hindi"),
        y = prompt("enter marks in math"),
        r = prompt("enter marks in secience"),
        e = prompt("enter marks in sst"),
        w = prompt("enter marks in eng")];
        x = parseInt(x);
        y = parseInt(y);
        r = parseInt(r);
        e = parseInt(e);
        w = parseInt(w);
    let sum = x + y + r + e + w; // addtion
    percent = sum / arr.length; // percent
    let result;
    if (sum > 200) {
        result = "You are passed";
    } else {
        result = "You are failed";
    }
    console.log(" Hindi:", x, "\n", "math:", y, "\n", "Sceience:", r, "\n", "sst:", e, "\n", "eng:", w, "\n", "Number total is :", sum);
    console.log("You got", percent, "%");
    console.log("Total No of subjects : ", arr.length);
    console.log(result);
    return result;
}


calculatePercent();

*/

// printing 5 number sum using fucntion
// function add5no (x,f,g,h,r){
//     let sum = x+f+g+h+r;
//     return sum ; // it will set the sum value into the "add5no"
// }
// sum = add5no(4,5,6,6,5); //assinging values
// console.log(sum);
// console.log(add5no);// printing whole function

// printin 1 to 100 using function

// function print1to100 (){
//     for(i=1;i<=100;i++){
//         console.log(i);
//     }
// }
// print1to100();

//printing table using function
// function printTable (x){
//     for(i=1;i<=10;i++){
//         console.log(x*i);
//     }
// }
// printTable(2); // invoking function it will print the table

// Arrow function in JS
// const addTwono = (x, y) => {
//     sum = x + y;
//     return sum;
// }
// console.log(addTwono(4,5));// invoking function and printing the value

// print table using arrow function
// const printTbale = (x)=>{
//     for(i=1;i<=10;i++){
//         console.log(i*x);
//     }
// }
// printTbale(4); // invoed function

// calucate factorial of n number
// function factorial(n) {
//     return n < 2 ? 1 : n * factorial(n - 1);
//     //how its works let say 3 fac = 3*2*1 //6
//     //if 5 fac = 5*4*3*2*1  // 120
// }

// console.log(factorial(5)); // 6

// calculate the square of n number unsing fucntions

// const square = function suq(n){
//     return n*n;
// }
// // console.log(square(3));

// const DOB_calculate = function (n) {
//     let age;
//     let currdate = 17;
//     let currmonth = 1;
//     let curryear = 2024;

//     let full_date = "24/07/1997";
//     let day = full_date.slice(0, 2);
//     day = parseInt(day);
//     let month = full_date.slice(4, 5);
//     month = parseInt(month);
//     let year = full_date.slice(6, 10);
//     year = parseInt(year);
//     let DOB = `${day}-${month}-${year}`;
//     age =  curryear - year;
//     console.log(age);

//     return age;
// }

// console.log(DOB_calculate());

//print odd / even num using arrow function
// const cal = (x) => {
//     if (x % 2 === 0) {
//         return "Eeven num"
//     } else {
//         return "odd num"
//     }

// }

// console.log(cal(5));

// // create an table of n usning const function
// const calMultiplication = (y) => {
//     for (let x = 1; x <= 10; x++) {
//         let multipication = `${y}*${x}=${x*y}`;
//         console.log(multipication);
//     }
// }

// console.log(calMultiplication(700)); // by invoing here you can print the table for any number

// Questions :Create a function using the “function” keyword that takes a String as an argument &
// returns the number of vowels in the string.

// function checkVowel(x) {
//     let Vowels = ["a", "e", "i", "o", "u"];
//     //console.log(Vowels);
//     let countOfv = 0;
//     for (val of x) {
//         //checking vowels here usning array
//         if (val === Vowels[0] || val === Vowels[1] || val === Vowels[2] || val === Vowels[3] || val === Vowels[4]) {
//             countOfv++;
//         }
//         // console.log(val);

//     }
//     console.log(countOfv);
// }
// checkVowel("soyalkhan"); // assigning vovels here

// Qs. Create an arrow function to perform the same task.

// const checkVowels = (x) =>{
//     let Vowels = ["a", "e", "i", "o", "u"];
//     let countOfv = 0;
//     for (val of x) {
//         //checking vowels here usning array
//         if (val === Vowels[0] || val === Vowels[1] || val === Vowels[2] || val === Vowels[3] || val === Vowels[4]) {
//             countOfv++;
//         }
//         // console.log(val);

//     }
//     console.log(countOfv);
// }
// checkVowels("soyalkhan");

//forEach Loop with array (we are using forEach for array to get all values from array)
//<important>only use in array</>
//  let arr = ["1,2,3,4,5,6,7,8,9,10"]

//  arr.forEach(function printVal(val){ //value of each index will occurs in val
//     console.log(val);
//  })

// to use call back use in arror function
//  let arr1 = ["pune","delhi","heydrabad","maharashtra"]

//  arr1.forEach((val) =>{ //value of each index will occurs in val
//     console.log(val.toUpperCase());//converting val(arr1 value converts to uppercase)
//  })

// usning callback parameter to use 3 parameter we need to show
//  let arr3 = ["soyal","mohan","rashmita","manoj"]

//  arr3.forEach(function printVal(val,inx,arr3){ //value of each index will occurs in val
//     console.log(val.toUpperCase(),inx,arr3);//converting val(arr1 value converts to uppercase)
//  })

//question : For a given array of numbers, print the square of each value using the forEach loop
// let arr = [1,2,3,4,5,6]
// arr.forEach ((new_val) => {
//     console.log(new_val * new_val); // printing square
// });

// create an arrow function and after creating pass the function into [  num.forEach(calSquare); ]
// let num = [1,2,3,4,5,6]
// const calSquare = (num) =>{
//     console.log(num*num);
// }
// num.forEach(calSquare); // we can call back function after creating

// map method in JS
// let arr = [4, 5, 6, 7, 8, 9];
// let newArr = arr.map((val) => {
//     console.log(val); // print the value of each array
//     console.log(val*val); // print square of each array n*n

//     return val*2; // return the value with val* 2 mean stored val * 2
// });
// console.log(arr);
// console.log(newArr);

// let arr = [1,2,3,4,5,6,7,8,9,10,11];
// let even = arr.filter((val)=>{
//     return val % 2 ===0;

// });
// let odd = arr.filter((val)=>{
//     return val % 2 !=0;

// });
// console.log(arr); // wihtout filter
// console.log(even);// prints even number
// console.log(odd);// prints even number

// reduce method in JS
// let arr = [1,2,3,4];

// const newArr = arr.reduce((res,curr)=>{
//     return res + curr; // it will print the sum the given array by one by as explained in notebook
//     });
//     console.log(newArr);

// Qeustion :We are given array of marks of students.
//  Filter our of the marks of students that scored 90+

// let marks = [44, 55, 66, 23, 65, 87, 90, 98, 89, 100]

// const topperStudents = marks.filter((val) => {
//     return val > 90
// });
// console.log("Number of toppers:",topperStudents.length);
// console.log(topperStudents.toString());

// Questions. Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array

// let unserInput = prompt("enter an number 1 to 100");
// let arr = [];
// for(i=1;i<=unserInput;i++){
//     console.log(i);
//     arr[i-1] = i
// }
// console.log(arr);

//reduce method to calculate sum of all numbers in the array
// const calculate_sum = arr.reduce((prev,secondVal)=>{ // passed parameter
//     return val = prev + secondVal; // called parameter
// });
// console.log(val);

// reduce method to calculate product(we can product as "factorial")
//of all numbers in the array

// const fact_Reduce = arr.reduce((prev,secondVal)=>{
//     return val = prev*secondVal;
// })

// console.log(val);

// Dom Manupulation and access dom tree

// window.console.log("Printing from window!");
// window.alert("Priting from window object!");
// console.log(window);// window object print

// accessing document from the window object
// console.log(window.document); // using log will print html code if you wan to print the document object use console.dir(window.document)
// console.dir(window.document);// prints the whole document object
// console.dir(document);// prints the whole document object
// console.dir(document.body);// prints the whole body object
// console.dir(document.head);// prints the whole head object
// console.dir(document.body.childNodes);// prints the whole all child nodes object
// console.dir(document.body.childNodes[1]);// prints the mentioned node
// document.body.childNodes[7].style.background = "red"; // change the backgournd color using javscript
// document.body.style.background = "red"; // change the backgournd color using javscript
// document.body.childNodes[1].innerText = "This is coding world!"; // change the text of h1 using javscript
// let head = document.getElementsByClassName("heading");
// console.log(head);
// let paragraph = document.getElementsByClassName("para");
// let headi = document.getElementById("heading");
// console.dir(headi);
// console.dir(paragraph);

// let fisrstP = document.querySelector("p"); // return only first node from the dom tree
// console.dir(fisrstP);
// let All_paragraph = document.querySelectorAll("p"); // return all mentioned p in this case
// console.dir(All_paragraph);

// let d1 = document.querySelector("div").innerText; // print all text inside the node chhild
// console.dir(d1);
// let d2 = document.querySelector("div").innerHTML; // print all HTML content inside the node chhild
// console.dir(d2);
// let d3 = document.querySelector("div").tagName; // print tag type
// console.dir(d3);
// let d4 = document.querySelector("div").textContent; // print the all text values inside node even ifs hidden
// console.dir(d4);

// Question 1:Create a H2 heading element with text - “Hello JavaScript”
// Append “from Apna College students” to this text using JS
// let btn = document.querySelector("#btn1");
// let head2 = document.querySelector(".h2");
// btn.addEventListener("click",()=>{
//     head2.innerText =head2.innerText +" course is on for all";
// //head2.innerText ="Hello soyal!";// this will change whole h2 inner txt
//     head2.style.color ="red";
//     console.log("btn clicked value changed");
// })

//Create 3 divs with common class name - “box”
//Access them & add some unique text to each of them.
// let i =1;
// let value = "This is DIV"
// let boxes = document.querySelectorAll(".box");

// for(box of boxes){
//     box.innerText = `This is an ${i} `  + box.innerText ;
//     i++; // increacing index to show div number
//     console.log(box.innerText);
// }

// usning foreach loop with button onclick

// boxes.forEach((val)=>{
// btn.addEventListener("click",()=>{
//     // btn.addEventListener("dblclick",()=>{      if you want that line occur when double click so use this dblclick
//     console.log("element impacted by script");
//     val.innerText = value + i++;
//     val.style.height ="100px";
//     val.style.width ="100px";
//     val.style.background ="blue";
// })
// })

// Qs. Create a new button element. Give it a text “click me” , background color of red & text color of white
//and insert the button at the first element of body tag

// let modeBtn = document.createElement("button");
// modeBtn.innerText ="Mode Change";
// modeBtn.style.backgroundColor ="Black";
// modeBtn.style.color ="white";
// modeBtn.style.border ="none";
// modeBtn.style.padding ="15px";
// document.body.prepend(modeBtn);

// Create a <p> tag in html, give it a class & some styling. Now create a new class in CSS and try to append this class to the <p> element.
// Solve this problem using classList. Did you notice, how you overwrite the class name when you add a new one?

// let old_class = document.querySelector(".old_p");
// console.log(old_class);
// // old_class.setAttribute("class","new_p"); // this remove the 1st older class overeding the class
// old_class.classList.add("class", "new_p"); // this will keep the older class and add new class

// Qs. (onclick)Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
// mode change light to dark dark to light
// let btn = document.querySelector(".mode-chnage");
// let currMode = "light";
// document.body.style.textAlign ="center";

// btn.addEventListener("click",()=>{
//     if(currMode ==="light"){
//         document.body.style.backgroundColor ="black";
//         document.body.style.color ="white";
//         currMode = "Dark";
//         btn.innerText = "Enable light Mode";
//         btn.style.backgroundColor = "white";
//         btn.style.color = "black";
//         btn.style.padding = "5px";
//         btn.style.border ="none"
//         btn.style.cursor = "pointer";
//     }else{
//         document.body.style.backgroundColor ="White";
//         document.body.style.color ="black";
//         currMode = "light";
//         btn.innerText = "Enable Dark Mode";
//         btn.style.backgroundColor = "black";
//         btn.style.color = "white";
//         btn.style.padding = "5px";
//         btn.style.border ="none";
//         btn.style.cursor = "pointer";
//     }
//     console.log(currMode);
// })

// (mouseover)when you will hover the mouse on the it willl show the text and when mouse of it will hide the element again.
// let addH1  = document.querySelector(".div1");
// addH1.addEventListener("mouseover",()=>{
//     let hiddenElment = document.querySelector(".h1-hidden");
//     hiddenElment.style.display = "block";
// })

// addH1.addEventListener("mouseout",()=>{
//     let hiddenElment = document.querySelector(".h1-hidden");
//     hiddenElment.style.display = "none"
// })

//(click btn change bg color )
// const btn = document.querySelector("button");
// function randomcolor(number){
//     return Math.floor(Math.random() * (number + 1));

// }
//     btn.onclick = () =>{
//     const rclr = `rgb(${randomcolor(255)},${randomcolor(255)},${randomcolor(255)})`;
//     document.body.style.backgroundColor = rclr;
//     console.log(rclr);
// }

// event object
// let btn = document.querySelector(".btn");
// let div = document.querySelector(".div1");
// btn.addEventListener("click",(event)=>{
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX,event.clientY);
//     console.log("This is example of event object we can use this inside function!");
// })

// div.addEventListener("mouseover",(event)=>{
//     div.style.backgroundColor = "black";
//     console.log(event);
//     console.log(event.type);
//     console.log("mouse is inside div");
// })
// div.addEventListener("mouseout",(event)=>{
//     div.style.backgroundColor = "white";
//     console.log(event);
//     console.log(event.type);
//     console.log("mouse out of the div");
// })

// Classes & Objects in js
// by creating an object an protoype objcet property we can use multiple functoin from there lacture 11 6:24

// const students = {
//     name: "Soyal",
//     age: 26,
//     id: "soyalk76",
//     printMarks: function(){
//         console.log("name = ",this.name);// we can use this.name to refer element from the object
//     },
// }
// // we can access and in fucntion we can access the element we are refering from the object
// // and it will print the name when we call the fucntion
// console.log(students.printMarks());

// const employee = {
//     calTax() {
//         console.log("tax is 10% fo you");
//     }
// };

// const soyal = {
//     salary : 40000,
// };
// const aman = {
//     salary : 40000,
//     calTax(){
//         console.log("tax rate is 20% for you"); // we have assign calTax from upper object but in this case
//         // it will run the own calTax function rather then other
//     }
// };
// const raman = {
//     salary : 40000,
// };
// const madan = {
//     salary : 40000,
// };
// const shaymlal = {
//     salary : 40000,
// };

// soyal.__proto__ = employee;// by doing this we can assign 1st object element to other object s like this
// aman.__proto__ = employee;// by doing this we can assign 1st object element to other object s like this
// raman.__proto__ = employee;// by doing this we can assign 1st object element to other object s like this
// madan.__proto__ = employee;// by doing this we can assign 1st object element to other object s like this
// shaymlal.__proto__ = employee;// by doing this we can assign 1st object element to other object s like this

// class car {
//     start(){
//         console.log("car started!");
//     }
//     stop(){
//         console.log("car stopped!");
//     }
//     applyBreak(){
//         console.log("cas break applied!");
//     }
//     setBrandMaingYear(brandMakeYear){
//         this.makedYear = brandMakeYear; // it will show the making year according to asignging year
//     }
// }

// // console.log(car); it will show the typeof class is function cause in javascript calss is special typeof function
// // creating object to access susing class to use car's method's
// let Maruti = new car(); // new object
// let BMW = new car(); // new object
// let Audi = new car();  // new object
// let fortuner = new car();  // new object

// // setting new method
// Maruti.setBrandMaingYear(1987); // setting year
// BMW.setBrandMaingYear(1800);  // setting year
// Audi.setBrandMaingYear(1680);  // setting year
// fortuner.setBrandMaingYear(2005);  // setting year

// // console.log(Maruti);

// remove Eventlistner

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//     console.log("btn clicked 1");
// })
// btn.addEventListener("click", () => {
//     console.log("btn clicked 2");
// })

// //assing like vairable cause it should remove in future
// const hander3 = () => {
//     btn.addEventListener("click", () =>{})

//     console.log("btn 3 clicked and will remove");
// }
// btn.addEventListener("click", hander3);

// btn.addEventListener("click", () => {
//     console.log("btn clicked 4");
// })

// btn.removeEventListener("click", hander3);// remove the 3rd listner from the fucntion

// Constructor in JS
// Constructor is by defaut created when you created an new line object like "let ford = new Cars(brand)"

// class Cars {
//     constructor(brand,mileage){
//         console.log("creating new object of constructor");
//         this.brand = brand;
//         this.mileage = mileage;
//     }

//     start(){
//         console.log("Car is starting");
//     }

//     stop(){
//         console.log("Car is stoped now");
//     }
// }
// let fortuner = new Cars("fortuner",10); // passing arguments to constructor // here constructor is created automatically
// console.log(fortuner);
// let Maruti = new Cars("maruti",20); // passing arguments to constructor / here constructor is created automatically
// Maruti.start();// calling fucntion start
// Maruti.stop();// calling fucntion stop
// console.log(fortuner.mileage); // calling mileadge which is passed by argument
// console.log(Maruti);

// Inheritance in JS
// class parent{
//     constructor(){
//         console.log("constructor is invoking");
//         this.job = "doing job";
//         this.care = "carying children";
//     }

//     eat(){
//         console.log("Human is eating");
//     }
//     sleep(){
//         console.log("Human is sleeping");
//     }
//     run(){
//         console.log("Human is running");
//     }
// }

// class child extends parent{
//     GoingSchool(){
//         console.log("Children is going school");
//     }
//     // method overloading it will run child fcuntion even we have inherited the parent function
//     run(){
//         console.log("children is running");
//     }

//     Cry(){
//         console.log("Children is crying");
//     }
// }
// let soyal = new child();
// console.log(soyal.eat()); // calling function of by inheriting
// console.log(soyal.run()); // method overloading runs the child class method
// console.log(soyal); // can call objects constructor

// Question. You are creating a website for your college. Create a class User with 2 properties, name &
// email. It also has a method called viewData( ) that allows user to view website data.
// let HiddenInfo = "Info from db for user"

// class User {
//     // taking value into constructor for further use
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }

//     ViewData(){
//         console.log("Data of user...",HiddenInfo);
//     }

// }

// // this admin can access the data of user and change it

// class TeacherAdmin extends User{
//     constructor(name,email){
//        super(name,email); // using super calling perent constructor and there values
//     }

//     editData(){
//         console.log("Teacher can edit the data from DB :" ,HiddenInfo = "Data Has been Chnaged by Admin"); // hidden data will be changed only by the admin
//     }
// }
// student accessing data
// let student1 = new User("Soyal","Soyalkhan76@gmail.com");// creating object
// let student2 = new User("Mohit","Mohit@gmail.com"); //creating object
// console.log(student2);// printing object
// console.log(student1.ViewData());// this can read the hidden info

//Teacher can access the DB
// let TeacherAdmin1 = new TeacherAdmin("admin","admin@org.com")

// Error Handling

// Try-catch :: code wont ouccr running print the error and show the error

// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b);
// console.log("sum of both A+B",a+b);
// console.log("sum of both A+B",a+b);
// console.log("sum of both A+B",a+b);
// console.log("sum of both A+B",a+b);
// console.log("sum of both A+B",a+b);
// console.log("sum of both A+B",a+b);
// try {
// console.log("sum of both A+B",a+g);// error in this line we can inspect the error and shrround with that line with try catch

// } catch (err) {
//     console.log("here is some error with",err);
// }
// console.log("sum of both A+B",a+b);
// console.log("sum of both A+B",a+b);
// console.log("sum of both A+B",a+b);

// setTimeout in JS

//normal setTimeout
// console.log(1);
// function timeout() {
//     console.log(2); // it  will print after after 2s time
// }
// console.log(3);
// setTimeout(timeout, 2000);

// console.log("one");
// console.log("two");
// console.log("three");
// //setTimeout function

// setTimeout(() => {
//     console.log("four");
// }, 5000);// timout after 5s

// console.log("five");
// console.log("six");
// console.log("seven");

// Callbacks in JS

// function addnumber(a, b) {

//     console.log(a + b);//22
//     console.log(a * b);//40
//     console.log(a / b);//10
//     console.log(a - b);//18
// }

// function calculator(a, b, addNumberCallback) {
//     addNumberCallback(a, b);
// }

// calculator(20,2,addnumber); // here is calling another addnumber function into calculator fucntion

// passing callback after defining function
// calculator(20, 2, addnumber);

//we can pass call like this passing time assign an function this is aslo valid method to trun callback
// calculator(20, 2, (a, b) => {
//     console.log("Sum of 20 + 2 = ", a + b);
// })

// callback hell // nesting callback is callback hell when you have inititilize multiple callback
// print 1 to 5 using callback's here we have to use multiple callback so problem wiill occur callback helll problem

// console.log("Loding Data from database....");
// function getData(dataId, nextData) {
//     // print after 2 sec
//     setTimeout(() => {
//         console.log("Data", dataId);
//         if (nextData) {
//             nextData();
//         }

//     }, 2000)
// }

// console.log("Prossesing data... 1");
// getData(1, () => {
//     console.log("Prossesing data... 2");
//     getData(2, () => {
//         console.log("Prossesing data... 3");
//         getData(3, () => {
//             console.log("Prossesing data... 4");
//             getData(4, () => {
//                 console.log("Prossesing data... 5");
//                 getData(5, () => {
//                     console.log("Data Feching Completed!");
//                 })
//             })
//         })
//     })
// });

// Promise in JS
// pending promise
// let promise = new Promise((resolve, reject) => {
//     console.log("hello promise");

// })

//resolve and reject
// let promise = new Promise((resolve, reject) => {
//     console.log("hello promise");
//     // resolve("success");// sent success msg into state
//     reject("some error") // sending error msg with message state will rejected

// })

//after certain time we can resolve and reject the task and recard the behaivior
// function getData(dataId, nextData) {
//     // print after 2 sec
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", dataId);
//             resolve("success");
//             if (nextData) {
//                 nextData();
//             }
//         }, 5000)
//     })

// }

//resolve and reject with fucntions and usng res and err parameter
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("hello promise");
//         // here we can only set one of them resolve or reject
//         // resolve success
//         resolve("successfully resolved");
//         //rejected warning server faliure
//         reject("some network error");

//     })

// }

// // store promise result in new vairable
// let promise = getPromise(); // printing fucntion and promise
// // if promise reolved we can use .then to show and use via function what want perform next task
// promise.then((res) => {
//     // parameter res for result = res and show res is defined at ablve fucntion ""
//     console.log("fullfilled..", res);
// })

// promise.catch((err) => {
//     // parameter err for using error and show in err it will show the error from fucntion defined above :
//     console.log("error..", err);
// })

//promises with asyncFunction
//suppose API 1
// function asyncFun1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success1");
//     }, 4000);
//   });
// }

//suppose API 1
// function asyncFun2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("success2");
//     }, 4000);
//   });
// }

//this logic will print both data at the same peroid this is not right way we have to call p1 and under p1 call p2 and under p2 call p3 something like line 1289

// fetching from API 1 this logic will print both data at the same peroid
// console.log("fetching data.....");
// let p1 = asyncFun1();
// p1.then((res) => {
//   console.log(res);
// });

// // fetching from API 2
// let p2 = asyncFun2();
// p2.then((res) => {
//   console.log(res);
// });

// fetching one by one

// console.log("Fetching data.....");
// let p1 = asyncFun1(); // from first function
// p1.then((res) => {
//   console.log(res);
//   let p2 = asyncFun2(); // from second function
//   p2.then((res)=>{
//     console.log(res);
//   })
// });

// promise chaining one by one print all the result and show :-

// function getDataFromDB(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data", dataId);
//       resolve("success");
//     }, 2000);
//   });
// }
// promise chaining
// getDataFromDB(1)
//   .then((res) => {
//     return getDataFromDB(2);
//   })
//   .then((res) => {
//     return getDataFromDB(3);
//   })
//   .then((res) => {
//     return getDataFromDB(4);
//   })
//   .then((res) => {
//     return getDataFromDB(5);
//   })
//   .then((res) => {
//     return getDataFromDB(6);
//   })
//   .then((res) => {
//     console.log("success");
//   });

// async await with fucntion in JS

// when you assign async so it will return promise automaically
// async function hello() {
//   console.log("hello async");
// }

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Wather data....");
//       resolve("200");
//     }, 2000);
//   });
// }

// async function getwatherData() {
//   await api();
//   await api();
// }

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data", dataId);
//       //with condition
//       if (dataId <= 10) {
//         resolve("success");
//       } else {
//         reject("server error data not compatible", reject);
//       }
//     }, 2000);
//   });
// }

// async function getAllData() {
//   console.log("Fetching data 1...");
//   await getData(1);
//   console.log("Fetching data 2...");
//   await getData(2);
//   console.log("Fetching data 3...");
//   await getData(3);
//   console.log("Fetching data 40 with error..."); // throw error and stop printing
//   await getData(40);
//   console.log("Fetching data 5...");
//   await getData(5);
//   console.log("Fetching data 50 with error...");
//   await getData(11);
// }

// try catch use case when you dont want to stop flow:
// async function getAllData() {
//   console.log("Fetching data 1...");
//   await getData(1);
//   console.log("Fetching data 2...");
//   await getData(2);
//   console.log("Fetching data 3...");
//   await getData(3);
//   console.log("Fetching data 40 with error...");
//   try {
//     await getData(40);
//   } catch (error) {
//     console.error(error);
//   }
//   console.log("Fetching data 5...");
//   try {
//     await getData(5);
//   } catch (error) {
//     console.error(error);
//   }
//   console.log("Fetching data 50 with error...");
//   try {
//     await getData(50);
//   } catch (error) {
//     console.error(error);
//   }
// }

// IIFE will run automaically without calling fucnton will run

//sample 1

//without calling ducntion will run automatically
// (function addTwo() {
//   console.log("with fucntion normal", 2 + 4);
// })();

// (() => {
//   console.log("with arrow fucntion", 5 + 5);
// })();

// function setdata(dataid) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataid);
//       resolve("success");
//     }, 3000);
//   });
// }
// (async () => {
//   await setdata(1);
//   await setdata(2);
//   await setdata(3);
//   await setdata(4);
//   await setdata(5);
// })();

// API = APPLICATION PROGRAMMING DATA BASE (FETCH API)

//cat fact fetching...

// let factPara = document.querySelector(".fact");
// let btn = document.querySelector(".fct-btn");

// const URL = "https://cat-fact.herokuapp.com/facts";

// const getFacts = async () => {
//   console.log("Fethicng data.....");
//   btn.innerText = "Fetching.....";
//   btn.style.backgroundColor = "yellow";
//   let response = await fetch(URL);
//   console.log(response);
//   let data = await response.json();
//   console.log(data[0].text);
//   //printing all stored facts
//   for (f of data) {
//     btn.innerText = "Data Fetched";
//     btn.style.backgroundColor = "Green";
//     const factList = document.createElement("li");
//     const node = document.createTextNode(f.text);
//     factList.appendChild(node);
//     document.body.appendChild(factList);
//     // console.log(f);
//   }

//   //   factPara.innerText = data[0].text;  // print only one fact
// };
// btn.addEventListener("click", getFacts);

//emojies fetchig...
let emBtn = document.querySelector(".emBtn");
let Emoji = document.querySelector(".Emoji");
const URL = "https://emojihub.yurace.pro/api/all";

const getEmoji = async () => {
  console.log("Fetching Emoji...");
  let resp = await fetch(URL);
  console.log(resp);
  let result = await resp.json();

  console.log(result);
  let i = 0;
  for (i = 0; i <= result.length; i++) {
    const listEmoji = document.createElement("li");
    const node = document.createTextNode(result[i].htmlCode);
    listEmoji.appendChild(node);
    console.log(i);
    Emoji.innerHTML = result[i];
    console.log((Emoji.innerHTML = result[i]));
  }
  console.log((Emoji.innerHTML = result[0]));
  console.log((Emoji.innerHTML = JSON.stringify(result[2].htmlCode)));
};

emBtn.addEventListener("click", getEmoji);
