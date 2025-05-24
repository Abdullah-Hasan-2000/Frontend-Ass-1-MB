// Q1: Write a program in which you have to create your own biodata details are: your name, email, city, 
// education, occupation, phone number, institute name etc. Using template literals and variable using let 
// and const and final output is shown in document.write() same as in below:

let name = "Abdullah Hasan";
let email = "abdullah.ah.hasan.2023@gmail.com"
let city = "Karachi";
let education = "Bachelor of Science in Computer Science";
let occupation = "Software Engineer";
let phoneNumber = "+8801234567890";
let instituteName = "NED University of Engineering and Technology";

document.write(`
  <h1>My Biodata</h1>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>City:</strong> ${city}</p>
  <p><strong>Education:</strong> ${education}</p>
  <p><strong>Occupation:</strong> ${occupation}</p>
  <p><strong>Phone Number:</strong> ${phoneNumber}</p>
  <p><strong>Institute Name:</strong> ${instituteName}</p>
`);

// Q2: Write a program of a basic mark sheet using JavaScript involves let, const variables to store marks 
// for different subjects and then calculating the total marks, percentage, and grade based on those marks. 
// Using template literals and variable using let and const and final output is shown in document.write(). 

let subject1 = 85;
let subject2 = 90;
let subject3 = 78;
let subject4 = 88;
let subject5 = 92;
const totalMarks = 500;
let obtainedMarks = subject1 + subject2 + subject3 + subject4 + subject5;
let percentage = (obtainedMarks / totalMarks) * 100;
let grade;
if (percentage >= 90) {
    grade = 'A+';
}
else if (percentage >= 80) {
    grade = 'A';
}
else if (percentage >= 70) {
    grade = 'B';
}
else if (percentage >= 60) {
    grade = 'C';
}
else if (percentage >= 50) {
    grade = 'D';
}
else {
    grade = 'F';
}
document.write(`
  <h1>Mark Sheet</h1>
  <p><strong>Subject 1:</strong> ${subject1}</p>
  <p><strong>Subject 2:</strong> ${subject2}</p>
  <p><strong>Subject 3:</strong> ${subject3}</p>
  <p><strong>Subject 4:</strong> ${subject4}</p>
  <p><strong>Subject 5:</strong> ${subject5}</p>
  <p><strong>Total Marks:</strong> ${totalMarks}</p>
  <p><strong>Obtained Marks:</strong> ${obtainedMarks}</p>
  <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
  <p><strong>Grade:</strong> ${grade}</p>
`);

// Q3: Students using this below image you have to create each variable keyword apply at least one 
// example for tasks executing. I share the output everyone must same as in the image. 

// Stored in Global Scope
// Var
{
    var name1 = 'Abdullah Hasan';
}
console.log(name3);

// Let
{
    let name2 = 'Abdullah Hasan';
}
console.log(name2);

// Const
{
    const name3 = 'Abdullah Hasan';
}
console.log(name3);


// Function Scope
// var
function varFunction() {
    var name = 'Abdullah Hasan';
    console.log(name);
}
varFunction();

// let
function letFunction() {
    let name = 'Abdullah Hasan';
    console.log(name);
}
letFunction();
// const
function constFunction() {
    const name = 'Abdullah Hasan';
    console.log(name);
}
constFunction();

// Block Scope
{
    var name1 = 'Abdullah Hasan';
    console.log(name);
}
console.log(name);
{
    let name = 'Abdullah Hasan';
    console.log(name);
}
{
    const name = 'Abdullah Hasan';
    console.log(name);
}

// Can be Reassigned
// var
var name1 = 'Abdullah Hasan';
name1 = 'Abdullah Hasan';
console.log(name1);

// let
let name2 = 'Abdullah Hasan';
name2 = 'Abdullah Hasan';
console.log(name2);
// const
const name3 = 'Abdullah Hasan';
console.log(name3);

// can be Redeclared
// var
var name1 = 'Abdullah Hasan';
var name1 = 'Abdullah Hasan';
console.log(name1);
// let
let letName = 'Abdullah Hasan';
let letName = 'Abdullah Hasan';
console.log(letName);

// const
const constName = 'Abdullah Hasan';
const constName = 'Abdullah Hasan';
console.log(constName);

// can be hoisted
// var
console.log(name1);
var name1 = 'Abdullah Hasan';
console.log(name1);

// let
console.log(letName1);
let letName1 = 'Abdullah Hasan';
console.log(letName1);

// const
console.log(constName1);
const constName1 = 'Abdullah Hasan';
console.log(constName1);