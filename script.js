console.log("Hello World");
console.log("My first javascript line of code!");
console.log("Isn't this cool!!");
let xp = 0;
console.log(xp);
let health = 100;
let gold = 50;
/*When a variable name has multiple words, the convention in JavaScript is to use what's called camelCase. 
The first word is lowercase, and the first letter of every following word is uppercase.*/
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory;

/*The variables you have assigned have all had values that are numbers.
 JavaScript has multiple different data types. 
 The next one you will use is the string. 
 Strings are used to store things like words or text.
 Strings are surrounded with double quotes, single quotes, or backticks. */
 let name = "Ruth";
console.log(name);
//You will need to use a data type that can do this. 
//An array can be used to hold multiple values.
let numbers = ["one", "two", "three"];
console.log(numbers);
//JavaScript interacts with the HTML using the Document Object Model, or DOM. 
//The DOM is a tree of objects that represents the HTML. 
//You can access the HTML using the document object, which represents your entire HTML document.
//One method for finding specific elements in your HTML is using the querySelector() method. 
//The querySelector() method takes a CSS selector as an argument and returns the first element that matches that selector.
//let button1 = document.querySelector("#button1");

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

//Functions are special tools that allow you to run sections of code at specific times. 
//You can declare functions using the function keyword
function goStore() {
    console.log("Going to store.");
  }
  function goCave(){
    console.log("Going to cave.");
  }