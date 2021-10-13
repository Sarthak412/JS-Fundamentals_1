/*
----------------------------------------
    JavaScript Fundamentals Part-2
----------------------------------------
*/

/* Activating Strict Mode */

// To use strict mode in JS use "use strict at the start of the file"

"use strict"; 
 
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("I can drive.");  

// Outputs 'I can drive'

/*
--------------------------------------
        Functions in JavaScript
--------------------------------------

-> A function is a piece of code which we can reuse over and over again.
-> Function is created using "function" keyword.
   Syntax: 
           function <function_name>() {

           }
*/

// Example of a function

function sayHello(){
    console.log("Hello");
}

// this is known as calling / invoking / running the function. 
sayHello();

// if we call the function one more time it will run the inner code again

sayHello();

function juiceShop(oranges, apples){
    console.log(oranges, apples);
    const juice = `Juice made of ${oranges} oranges and ${apples} apples.`;
    return juice;
}

const finalProd = juiceShop(4, 5);
console.log(finalProd);

const secondProd = juiceShop(3, 5);
console.log(secondProd);

// Some more examples of functions

// Function for addition of two numbers
function twoSum(num1, num2){
    console.log(num1, num2);
    const sumOfTwo = num1 + num2;
    return sumOfTwo;
}

const finalSum =  twoSum(5, 5);
console.log(finalSum);


/*
---------------------------------------------
     Function Declarations vs Expressions
---------------------------------------------
*/

// Function declaration
function calcAge(birthYear){
    return 2021 - birthYear;
}

const age = calcAge(2000);
console.log(age);

// Expressions

const calcAge2 = function (birthYear) {   // Another way of declaring a function
    return 2021 - birthYear;     
}

const age2 = calcAge2(2000);
console.log(age, age2);       // outputs 21 21


// Arrow function

const calcAge3 = birthYear => 2021 - birthYear;   // Arrow function
const age3 = calcAge3(2000);  // capturing the value and storing it in a variable
console.log(age3);    // Displaying the output to the console

// Let's see one more example of arrow function

const yearsUntilRetirement = (birthYear, firstName) => {
    const age4 = 2021 - birthYear;
    const retirement = 55 - age4;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(2000, 'Sarthak'));
console.log(yearsUntilRetirement(2002, 'Mitesh'));


// Functions calling other functions 


const cutPieces = function (fruit){
    return fruit * 4;
}

const fruitProcessor = function (apples, oranges){

    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    
    const juice2 = `Juice made of ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
    return juice2;
}

console.log(fruitProcessor(2, 3));


// Reviewing functions 

// separate function to calculate age 
const yourAge = function(yourBirthYear) {
    return 2021 - yourBirthYear;
}

const ageToDrive = function (firstName, yourBirthYear){

    const your_Age = yourAge(yourBirthYear);

    // checking if he is underage using if/else block
    if(your_Age > 18){
        return `${firstName} you are ${your_Age} you can drive.`;
    }
    else{
        return `You are under 18 comeback when you are 18.`;
    }

}

console.log(ageToDrive('Sarthak', 2005));
console.log(ageToDrive('Aryan', 1999));

// Lets check example of all 3 types of functions

// 1st type: Function Declaration 

/*
    function <function_name> () {
        return statements;
    }
*/

function additionFunc(num_1, num_2) {  // declaring function additionFunc with parameters num_1 & num_2
    console.log(num_1, num_2);        // Logging both the values to the console          
    const finalSum = num_1 + num_2;  // Variable to store the sum of both parameters
    return finalSum;                // returning the final sum
}

/* Storing the function value in another variable */
const final_sum = additionFunc(15, 5);     
console.log(final_sum);    // Outputting final sum i.e. returns 20


// 2nd type: Function Expression 

/*
    const <variable_name> = function (parameters){
        return statements;
    };
*/

// storing the function value in a variable
const requiredAge = function (myAge){
    if(myAge > 18){
        return `Your age is ${myAge} you can drive.`;
    }
    else{
        return `Your age is ${myAge} you cannot drive.`;
    }    
}; 

const enteredAge = requiredAge(15);
console.log(enteredAge);


// 3rd type Arrow function
// Arrow function is mostly used for a quick one-line function.

/*
    const <function_name> = parameters => statements;
*/

const votingAge = myAge2 => myAge2 >= 18 ? `You can vote`:`You cannot vote`;


const finalVoting = votingAge(18);
console.log(finalVoting);



/*
-------------------------------------------
           Introduction to Arrays
-------------------------------------------
*/

// There are Two ways of declaring an array

const powerFullNinjas = ['Naruto', 'Sasuke', 'Minato', 'Itachi'];

console.log(powerFullNinjas);

// 2nd way using Array function

const highestPower = new Array(100, 95, 100, 99);

console.log(highestPower);

/* 
As we know array starts from 0 to n so if we want to access a specific
element in the array we can use the array name and its index. Look at the 
below example, 
*/

console.log(powerFullNinjas[0], powerFullNinjas[2], powerFullNinjas[1]);

// As our first array consists of 4 ninjas so our array starts from 0 to 3

// If we want to access the last element of the array we will write,

console.log(powerFullNinjas[3]);

/* 
There's one more way if you want print the last element in the array
i.e. using length function. For example,
*/

console.log(powerFullNinjas[powerFullNinjas.length - 1]); // returns Itachi

/*
 * It returns the last element of the array because using length function 
   we get the actual size of the array and the size of the array is 4. 
   And if we write length - 1 gives us 3 which points to the last element 
   in the array. For example, 

   console.log(powerFullNinjas[powerFullNinjas.length - 1]) = 4 - 1 = 3.
   console.log(powerFullNinjas[3]);

 * That's the basic way of declaring and accessing the elements in the 
   array. 
*/

// Let's see how can we insert into array

powerFullNinjas[2] = 'Jiraya'; // We updated the 2nd position to 'Jiraya'

// Let's log this updated array to the console

console.log(powerFullNinjas);

// Returns ['Naruto', 'Sasuke', 'Jiraya', 'Itachi']
// As we can see the second position is updated to 'Jiraya'

/*
 * As we can see here our array was declared using const keyword but still 
   we change/updated the values in the array.
   
 * That happens because, arrays can be mutated. And const keyword gives an
   error when we try to change the primitive value.
 
 * Even if we update some part of the array we cannot change the whole array.
   For example,

   powerFullNinjas = ['Hinata', 'Sakura', 'Obito'];

   we cannot change the array like that it will through an error saying
   'Assignment to constant variable'. 
*/

// Array can store different types of data together i.e. string and number

const narutoInfo = ['Naruto', 'Uzumaki', 24, 'Hokage'];
console.log(narutoInfo);

// As you can see we stored numbers and string together
// We can also store arrays inside arrays for example,

const arrInarr = ['Naruto', 'Uzumaki', 24, 'Hokage', powerFullNinjas];

// We stored the first array i.e. 'powerFullNinjas' in 'arrInarr'.

// We can create a variable to store data and refer the variable in the array
// For example,

const firstHokage = 'Hashirama';
const posi = '1st Hokage';

const newArr = [firstHokage, posi, 35, 'Powerfull'];
console.log(newArr);

// As you can see we referred the data from a variable in the array.

// Exercise 

const calc_Age = function (b_year){
    return 2021 - b_year;
}

const y = [2000, 2001, 2004, 2006];

const a1 = calc_Age(y[0]);
const a2 = calc_Age(y[1]);
const a3 = calc_Age(y[2]);

console.log(a1, a2, a3);    // returns 21 20 17


