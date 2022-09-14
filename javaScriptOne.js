/*
How do we assign a value to a variable?
How do we change the value of a variable?
How do we assign an existing variable to a new variable?
Remind me, what are declare, assign, and define?
What is pseudocoding and why should you do it?
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?


1- we assign value to variable using assignment operator.
2- you can change its value by assigning a different value
3- we can simply reassign the new value to the variable
4- You can declare a variable without giving it a value and then when you give ita value ,you are assigning.
   all that means defining.
5- basically a cooked up presentation of the code. In most cases, algorithms are represented using pseudo codes as they can be interpreted by programmers without any background of coding.
6- 60% of the time would you say you spend on just thinking, figuring stuff out and planning, vs actually just typing out what you have planned?

    =====================================================================
     
    
    
    B. Strings

Create a variable called firstVariable
Assign it the value of the string "Hello World"
Change the value of this variable to some number
Store the value of firstVariablein a new variable called secondVariable
Change the value of secondVariable to any string.
What is the value of firstVariable?
Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
*/
//

//=================================================================================

/* C. Booleans


  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a != b);
  console.log(c != d);
  console.log('Name' = 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true __ false);
  console.log(false __ false __ false __ false __ false __ true);
  console.log(false  =  false)
  console.log(e  != 'Kevin');
  console.log(a __ b ___ c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a __ a ___ d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 __ '48');
*/

// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit

   const animal = 'cow'
   if ( animal === 'cow'){
    console.log('mooo');
   }else {
    console.log("Hey! You're not a cow.");
   }

//    E. Driver's Ed

//    Make a variable that holds a person's age; be semantic
//    Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

const age = 18;

  if ( age >= 16){
    console.log('Here are the keys!')
  }else if ( age < 16){
    console.log("Sorry, you're too young");
  }

// || LOOPS

//   A. The basics

//   Write a loop that will print out all the numbers from 0 to 10, inclusive
//   Write a loop that will print out all the numbers from 10 up to and including 400
//   Write a loop that will print out every third number starting with 12 and going no higher than 4000

   for ( let i = 0; i<= 10; i++){
    console.log(i);
   }

   for ( let j = 10; j<= 400; j++){
    console.log(j);
   }

   for ( let i = 12; i<= 400; i+=3){
    console.log(i);
   }

//    B. Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i}  is an even number `);
  }
}

//    C. Give me Five

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(`${i}  I found a number. High five! `);
  }  if (i % 3 === 0) {
    console.log(`${i} I found a number. Three is a crowd`);
  }else if (i % 5 === 0 && i % 3 === 0) {
    console.log(`${i} I found a number. Three is a crowd , I found a number. High five!`);
  
    }
}

// D. Savings account

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.





//                A. Talk about it:
// What are the things in an array called?
// Do Arrays guarantee those things will be in order?
// What real-life thing could you model with an array?


// 1- element 
// No
// shooping list cart



// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes

    const quotes = ['quote1', 'quote2',  'quote3'];

// C. Accessing elements
// Given the following array 
// How do you access the 1st element in the array?
// Change the value of "Hello"to "World"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();


const randomThings = [1, 10, "Hello", true]
  console.log(randomThings[0]);
  randomThings[2]= "world";
  console.log(randomThings);


//   D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array?
// Change the value of "Github" to "Octocat"
// Add a new element, "Cloud City" to the array

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
ourClass[2]
ourClass[4]= 'Octocat'
ourClass.push("Cloud City")



// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// Remove the 5 from the beginning of the array.
// Add the string "Bob Marley"to the beginning of the array.
// Remove the string of your choice from the end of the array.
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

const myArray = [5, 10, 500, 20]
myArray.push("Aegon")
myArray.shift(5)
myArray.unshift("Bob Marley")
myArray.pop();
myArray.reverse();
console.log(myArray);
//1- yes 
//2-changing the array itself instead of returning a new array with the new changes.
// 3- it returns the array in reverse  of the original order

 //=============================================================

// F. Biggie Smalls

// Create a variable that contains an integer.

// Write an if ... elsestatement that:

// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.

const num = 250;

if ( num < 100){
    console.log("little number");
}else {
    console.log("big number");
}
//=============================================

// Write an if ... else if ... elses tatement:

// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey"

const num1= 3
if ( num1 < 1){
    console.log("little number");
}else if (num1 > 10) {
    console.log("big number");
}else{
    console.log("monkey");
}

//====================================Kristen Closet exercise ====================

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  
   // console.log(`"Kristyn is rocking that ${kristynsCloset[2]}  today!" `);
     
    // kristynsCloset.splice(6,0,"raybans") 
    // kristynsCloset[5] = "stained knit hat"
    // console.log(kristynsCloset);
   
    console.log(thomsCloset[0][0])
    console.log(thomsCloset[1][2])
    console.log(thomsCloset[2][1])

    console.log( `"Tom is wearing a ${thomsCloset[0][0]} , ${thomsCloset[1][1]} and ${thomsCloset[2][2]}"`)
    thomsCloset[1][2] = 'Footie Pajamas'
    console.log(thomsCloset[1]);


    //===========================================
      
    // IV. Functions

   function printCool (name) {
       return name + " is cool"
    }
     console.log( printCool("Captain Reynolds"));


    function calculateCube(number){
        return number * 25
    }
     console.log(calculateCube(5));


     function isVowel(str){
         if ( str.toLowerCase()  === 'a'|| str.toLowerCase() === 'e'||str.toLowerCase() === 'u' || str.toLowerCase() === 'i'|| str.toLowerCase() === 'o'){
            return true
         }else {
            return false 
         }
     }
     console.log(isVowel('E'));

    // 1 
      

     //2 
      function getMultipleLengths(arr){
        return arr.map(function(str){
           return arr.length   
      });
      }
      console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//=============================================

//       A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.

  
user = {
     name : 'john',
     email : 'b@gmail.com',
     age : 40,
     purchased : []
}
 user[1] = 'c@gmail.com'

 console.log(user);