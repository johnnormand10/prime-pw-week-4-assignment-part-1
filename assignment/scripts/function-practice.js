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
console.log(hello() );

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}`;
}
// Remember to call the function to test
console.log(helloName('John') );

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
}
console.log(addNumbers(124 , 678) );

// 4. Function to multiply three numbers & return the result
function multiplyThree( num0, num1, num2){
  let answer = num0 * num1 * num2;
  return answer;
}
console.log(multiplyThree(34 , 56, 89) );

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( arr ) {
  if( arr.length === 0){
    return undefined;
  }
  
  else{
    return arr[arr.length - 1];
  }
}
let arr = ['One' , 'Two' , 'Three' , 'Four'] // array function last search

let lastValue = getLast(arr);
console.log(lastValue);
let undefinedValue = getLast([]);
console.log(undefinedValue);

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let array = ['Soccer' , 'Snowboarding' , 'Wakeboarding'];



function find( value, array ){
let valueFound = false;
  for( let i = 0; i < array.length; i++ ){
    if(array[i] === value){
      valueFound = true;
      break;
    }
  }
console.log(valueFound);
return valueFound;  
}

find('Soccer' , array);
find('Snowboarding' , array);
find('Hanging out with friends' , array);
find('Wakeboarding' , array);
find('Reading' , array);

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise


function isFirstLetter(letter, string) {
 
  const firstChar = string.slice(0 , 1);
  if(letter === firstChar){
    return true;
  }

  else{
    return false;
  }
}


console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );// turn string into array
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(numberArray) {
  let sum = 0;
  // TODO: loop to add items
  for ( i = 0; i < numberArray.length; i++){
    sum = sum + numberArray[i];
  }
  return sum;
}

console.log(sumAll([45 , 39 , 1 , 99]));
console.log(sumAll([1267 , 293 , -1234 , 56783]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
