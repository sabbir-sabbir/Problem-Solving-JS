// 1. What will be the output of the following code and why?

 function scopeTest() {
  if (true) {
    var varVariable = "I am var";
    let letVariable = "I am let";
    const constVariable = "I am const";
  }
  console.log(varVariable);
  console.log(letVariable);
  console.log(constVariable);
} 

scopeTest();
  

// output.................................................
 I am var
  ReferenceError: letVariable is not defined     


// Behind the Context................................................
// When scopeTest is called:

// console.log(varVariable); will output I am var because varVariable is accessible throughout the function.
// console.log(letVariable); will cause a ReferenceError because letVariable is not accessible outside the if block.
// console.log(constVariable); will also cause a ReferenceError because constVariable is not accessible outside the if block.





/** 2... Write a function greet that takes two parameters, name and greeting.
greeting should have a default value of "Hello". If only the name is provided,
the function should return the greeting followed by the name. If both are provided,
it should return the custom greeting followed by the name. 

*/
console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob", "Good morning")); // "Good morning, Bob!"

// Answer..
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
  }
  
  console.log(greet("Alice")); // "Hello, Alice!"
  console.log(greet("Bob", "Good morning")); // "Good morning, Bob!"
  




  /** 3... Write a function sum that takes any number of arguments and returns their sum using the rest parameter.
   * 
   * 
console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum(5)); // 5
   */


// Answer..
function sum(...args) {
    return args.reduce((total, current) => total + current, 0);
  }
  
  console.log(sum(1, 2, 3)); // 6
  console.log(sum(10, 20, 30, 40)); // 100
  console.log(sum(5)); // 5
  






  /** 4... Given the following arrays, use the spread operator to merge them into a new array (mergedArray).
     const array1 = [1, 2, 3];
     const array2 = [4, 5, 6];
     const array3 = [7, 8, 9];
 */


     // Answer..

     const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const mergedArray = [...array1, ...array2, ...array3];

console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]







/**5... Write an object person using the object literal syntax extensions.
The object should have properties name and age, and a method greet that returns a greeting message. 

const name = "John";
const age = 30;
*/
// Your code here
console.log(person.greet()); // "Hi, I'm John and I'm 30 years old." 



     // Answer..

     const name = "john";
     const age = 30;

     const person{
         name,
         age,

         greet(){
            return `Hi, Im ${this.name} and Im ${this.age} years old  `;
         }
     }

     console.log(person.greet());











/** 6... Write a for...of loop to iterate over the following array and print each element to the console.  */

     // Answer..

const fruits = ["apple", "banana", "cherry"];

for( let fruitlist of fruits ){
    console.log(fruitlist);
}









/** 7...  Use template literals to create a string that includes variables name and age. */
// Answer..

     const name = "Alice";
     const age = 25;

     const message = `My name is ${name} and I m ${age} years old`;
     console.log(message);




/** 8... You have an array of objects representing students and their grades.
Use a for...of loop to iterate over the array and print each student's name and grade. */

const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 }
  ];
  
  // Your code here

// Answer..
const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 }
  ];
  
  for (const student of students) {
    console.log(`${student.name}: ${student.grade}`);
  }
  








/**  9... You have a nested array of numbers. Use a for...of loop to iterate over each inner array and print the sum of its elements. */
const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  

  // Your code here
// Answer..
const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  for (const innerArray of nestedArrays) {
    let sum = 0;
    for (const num of innerArray) {
      sum += num;
    }
    console.log(`Sum of ${innerArray}: ${sum}`);
  }
//   output...
Sum of 1,2,3: 6
Sum of 4,5,6: 15
Sum of 7,8,9: 24








/** 10...   Use template literals to create a string that includes variables a and b, as well as the result of their addition.*/
const a = 5;
const b = 10;

// Your code here
const result = ``;
console.log(result); // "The sum of 5 and 10 is 15."

// Answer..
const a = 5;
const b = 10;

const result = `The sum of ${a} and ${b} is ${a + b}.`;

console.log(result); // "The sum of 5 and 10 is 15."





                                        /**Great 
                                         * finally..
                                         * We solved our 10 problem...
                                         */


  
