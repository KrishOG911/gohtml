// Write a simple JavaScript program to join all elements of the following array into a string

let myColor = ["Red", "Green", "White", "Black"];

let result1 = myColor.toString();
console.log(result1);

let result2 = myColor.join();
console.log(result2);

let result3 = myColor.join('+');
console.log(result3);

//9.Write a JavaScript program to compute the sum and product of an array of integers.

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);

let product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log("Product:", product);
