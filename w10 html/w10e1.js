// 1. Write a program in JavaScript to create variables to store numeric, float, string, 
//    and Boolean values and show them on the page using the document.write() function.
let num =2;
let floatNum = 10.5;
let str = "Hello, Ankit sir!";
let bool = true;

document.write("Numeric: " + num + "<br>");
document.write("Float: " + floatNum + "<br>");
document.write("String: " + str + "<br>");
document.write("Boolean: " + bool + "<br>");


// 2. Write a program to input two data values for Your Name and Student ID in prompt 
//    dialog boxes and show them in an alert dialog box.
let name = prompt("Enter your name:");
let studentId = prompt("Enter your Student ID:");

alert("Name: " + name + "\nStudent ID: " + studentId);


// 3. WAP to show the use of if...else if...else for the following conditions:
//    a. For marks >= 80 and marks <= 100, show "Distinction"
//    b. For marks >= 60 and marks < 80, show "First Division"
//    c. For marks >= 50 and marks < 60, show "Second Division"
//    d. For marks >= 40 and marks < 50, show "Third Division"
//    e. For marks < 40, show "Fail"
let marks = parseInt(prompt("Enter your marks:"));

if (marks >= 80 && marks <= 100) {
    alert("Distinction");
} else if (marks >= 60 && marks < 80) {
    alert("First Division");
} else if (marks >= 50 && marks < 60) {
    alert("Second Division");
} else if (marks >= 40 && marks < 50) {
    alert("Third Division");
} else {
    alert("Fail");
}


// 4. WAP to get a number input with a prompt dialog box and show the corresponding day using a switch case:
//    a. For Case 1, show "Sunday"
//    b. For Case 2, show "Monday"
//    c. For Case 3, show "Tuesday"
//    d. For Case 4, show "Wednesday"
//    e. For Case 5, show "Thursday"
//    f. For Case 6, show "Friday"
//    g. For Case 7, show "Saturday"
//    h. For default, show "Invalid"
let dayNumber = parseInt(prompt("Enter a number (1-7) for the day:"));

switch (dayNumber) {
    case 1:
        alert("Sunday");
        break;
    case 2:
        alert("Monday");
        break;
    case 3:
        alert("Tuesday");
        break;
    case 4:
        alert("Wednesday");
        break;
    case 5:
        alert("Thursday");
        break;
    case 6:
        alert("Friday");
        break;
    case 7:
        alert("Saturday");
        break;
    default:
        alert("Invalid");
}


// 5. WAP in JavaScript using a for loop to display 4 images with image names as 1.jpg, 2.jpg, 3.jpg, and 4.jpg.
for (let i = 1; i <= 4; i++) {
    document.write('<img src="' + i + '.jpg" alt="Image ' + i + '"><br>');
}


// 6. WAP to display the multiplication table of 5 as follows:
//    5 * 1 = 5
//    5 * 2 = 10
//    5 * 3 = 15
//    ...
//    5 * 10 = 50
for (let i = 1; i <= 10; i++) {
    document.write("5 * " + i + " = " + (5 * i) + "<br>");
}
