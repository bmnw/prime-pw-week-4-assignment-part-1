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

/**
 * Evaluates whether an entered number is greater than zero after checking whether entered parameter is a number.
 * @param {number} number Input a number.
 * @returns true if number is > 0, false otherwise
 */

function isPositive( number ) {
  console.log('in isPositive:', number);
  if(typeof number === 'number'){
    if ( number > 0 ){
      return true;
    } else {
      return false;
    }
  } else{
    return 'Enter numbers only, please.'
  }
}

// function test

console.log('isPositive test:', isPositive(-78));
console.log('isPositive test:', isPositive('string'));
console.log('isPositive test:', isPositive(0.23458));
console.log('isPositive test:', isPositive(-543));
console.log('isPositive test:', isPositive(false));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

/**
 * Determines the last item in an array.
 * @param {array} array Input array.
 * @return The last item in the entered array. If array is empty, return 'undefined'.
 */

function getLast( array ) {
  console.log('in getLast:', array);
  let lastItem = array[array.length-1];
  if(array.length === 0){
    return 'undefined';
  } else if(array.length>0){
    return lastItem;
  }
}

// function test

console.log('getLast test:', getLast([]));
console.log('getLast test:', getLast([0.45, true, false, 'string', 67]));
console.log('getLast test:', getLast([45, 98, 23, 12, -6]));
console.log('getLast test:', getLast([true, false, false, false, true, true]));
console.log('getLast test:', getLast([1]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

/**
 * Searches for given value in the given array.
 * @param {value} value Input the value you want to find
 * @param {[]} array Input the array to search through
 * @return Returns true if the value is found in the array, returns false if not found
 */

function find( value, array ){
  console.log('in find:', value, array);
  for(let i=0; i<array.length; i += 1){
    if(value === array[i]){
      return true; // function will end at the first match
    }
  }
  return false; // function will end here if the value is not found
}

// function test

console.log('find test:', find(5, [true, 5, 6, 3, 5]));
console.log('find test:', find(5, [true, false, 6, 3, 'five']));
console.log('find test:', find(-3, [2, false, 'string', -3, 124234]));
console.log('find test:', find(5, []));
console.log('find test:', find(false, [true, 5, 6, 3, 5]));
console.log('find test:', find('', [true, 5, '', 3, 5]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

/**
 * Checks if a given letter is the first letter in a given string
 * @param {string} letter Input a letter 
 * @param {string} string Input a string to check the first letter of
 * @return Returns true if letter is the first letter in the string, returns false otherwise
 */

function isFirstLetter(letter, string) {
  console.log('in isFirstLetter:', letter, string);
  if(letter === string[0]){
    return true;
  } else{
    return false;
  }
}

// function test

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
console.log('isFirstLetter test:', isFirstLetter('b', 'Better make a sandwich.'));
console.log('isFirstLetter test:', isFirstLetter('B', 'Better make a sandwich.'));
console.log('isFirstLetter test:', isFirstLetter(34, '34 days until vacation!'));
console.log('isFirstLetter test:', isFirstLetter('3', '34 days until vacation!'));
console.log('isFirstLetter test:', isFirstLetter('34', '34 days until vacation!'));

// 9. Function to return the sum of all numbers in an array

/**
 * Adds up the numbers in an array if the array only contains numbers
 * @param {[]} array Input an array of numbers
 * @return Returns the sum of all the numbers in an array
 */

function sumAll(array) {
  console.log('in sumAll:', array);
  let sum = 0
  for(let i=0; i<array.length; i += 1){
    if(typeof array[i] !== 'number'){
      return 'Please only enter numbers in the array.';
    }
  }
  // TODO: loop to add items
  for(let i=0; i<array.length; i += 1){
    sum = sum += array[i];
  }
  return sum;
}

// function test

console.log('sumAll test:', sumAll([1, 2, 3, 4, 5]));
console.log('sumAll test:', sumAll([1, -2, 3, 4, 5]));
console.log('sumAll test:', sumAll([1, 2, 3.5, 4, 5]));
console.log('sumAll test:', sumAll([1, 2, 3, '4', 5]));
console.log('sumAll test:', sumAll([1, true, 3, 4, 5]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

/**
 * Creates a new array containing all of the positive numbers in the input array.
 * Creates an empty array if no positive numbers in given array.
 * @param {[]} array Input an array of numbers.
 * @return Returns a new array containing the positive numbers in the input array.
 */

function positiveNumbers(array){
  console.log('in positiveNumbers', array);
  let positiveArray = [];
  for(let i=0; i<array.length; i += 1){
    if(typeof array[i] !== 'number'){
      return 'Please only enter numbers in the array.';
    }
  }
  for(let i=0; i<array.length; i += 1){
    if(array[i] > 0){
      positiveArray.push(array[i]);
    }
  }
  return positiveArray;
}

// function test

console.log('positiveNumbers test:', positiveNumbers([4, 0, -5, 6, -77, 98, 500]));
console.log('positiveNumbers test:', positiveNumbers([-6, -8, -44, -678]));
console.log('positiveNumbers test:', positiveNumbers([4, 0, 7/8, 6, 0.8396, 98, 500]));
console.log('positiveNumbers test:', positiveNumbers([4, 0, 'maybe', 6, 0.8396, 98, 500]));
console.log('positiveNumbers test:', positiveNumbers([-4, 1, -1, 2, -2, 3, -3, 4]));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// From Edabit:
// Create a function that takes one string parameter and returns a coded version of the input string.
// Provided note: the function should make the following changes:
// 'a' --> 4
// 'e' --> 3
// 'i' --> 1
// 'o' --> 0
// 's' --> 5

/**
 * Create a coded version of the input string
 * @param {string} initialString Input a string
 * @return Returns a coded version of the input string.
 */

function secretString(initialString){
  console.log('in secretString:', initialString);
  let lowerCaseString = initialString.toLowerCase();
  console.log('all lowercase:', lowerCaseString); // validating that codedString is all lowercase
  let codedString = lowerCaseString.replace(/a/g, 4).replace(/e/g, 3).replace(/i/g, 1). replace(/o/g, 0).replace(/s/g, 5);
	return codedString;
}

// testing .replace syntax
let string = 'I love to boogie.'
let newString = string.replace('I', 'You');
console.log('.replace syntax test:', string, newString);

// testing secretString 

console.log('secretString test:', secretString('JavAscript is cool'));
console.log('secretString test:', secretString('Lots of WAys to mAke a cake.'));
console.log('secretString test:', secretString('cool beans, you got it!'));



