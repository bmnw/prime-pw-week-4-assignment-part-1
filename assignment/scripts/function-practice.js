console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

// Added the desired return: saying hello and referencing the name parameter.

function helloName( name ) {
  console.log('in helloName:', name);
  return "Hello " + name + '!';
} // end helloName

// Remember to call the function to test

console.log('helloName test:', helloName('Lons'));
console.log('helloName test:', helloName('Alice'));
console.log('helloName test:', helloName('Corinne'));
console.log('helloName test:', helloName(45834));
console.log('helloName test:', helloName(true));

// 3. Function to add two numbers together & return the result

// Added a second parameter name because this function needs to take two arugments.
// Created a variable named 'sum' which is assigned the value of firstNumber + secondNumber.
// Created a conditional to check if both entered parameters are numbers.
// If both parameters are numbers, the function returns the variable 'sum'.
// If one or both parameters are not numbers, the function returns "Enter numbers only, please."

function addNumbers( firstNumber, secondNumber ) {
  console.log('in addNumbers:', firstNumber, secondNumber);
  let sum = firstNumber + secondNumber;
  if(typeof firstNumber === 'number' && typeof secondNumber === 'number'){
    // return firstNumber + secondNumber;
    return sum;
  } else{
    return 'Enter numbers only, please.';
  }
}

// function test

console.log('addNumbers test:', addNumbers(4, 7));
console.log('addNumbers test:', addNumbers(-4, 7));
console.log('addNumbers test:', addNumbers(-3, -23));
console.log('addNumbers test:', addNumbers(1000, 45000));
console.log('addNumbers test:', addNumbers(0, 0.12678375));
console.log('addNumbers test:', addNumbers(true, 4));
console.log('addNumbers test:', addNumbers('it is a string', 87));

// 4. Function to multiply three numbers & return the result

// Added three parameter names within the function ().
// Created variable named 'product' which is assigned the value of num1 * num2 * num3.
// Created a conditional to check if all three entered parameters are numbers.
// If all parameters are a number, the function returns the variable 'product'.
// If any parameters are not a number, the function returns "Enter numbers only, please."

function multiplyThree(num1, num2, num3){
  console.log('in multiplyThree:', num1, num2, num3);
  let product = num1 * num2 * num3;
  if(typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number'){
    // return num1 * num2 * num3
    return product;
  } else{
    return 'Enter numbers only, please.';
  }
}

// function test

console.log('multiplyThree test:', multiplyThree(1, 2, 3));
console.log('multiplyThree test:', multiplyThree(5, 10, 10));
console.log('multiplyThree test:', multiplyThree(true, 1, 11));
console.log('multiplyThree test:', multiplyThree(-1, 2, 3));
console.log('multiplyThree test:', multiplyThree(0.25, 2, 3.5));
console.log('multiplyThree test:', multiplyThree('string', 100, 3));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return;
  }
    return;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {

}

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  
}

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
