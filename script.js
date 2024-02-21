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
  function fightDragon(){
    console.log("Fighting dragon.");
  }
  /* These elements have a special property called onclick, 
    which you can use to determine what happens when someone clicks that button.
  */
  // You can access properties in JavaScript a couple of different ways. 
  // The first is with dot notation.
  // In this example, button1 is the button element, and goStore is a reference to a function. 
  //When the button1 is clicked, GoStore will be called.
  // initialize buttons
  button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
//The innerText property controls the text that appears in an HTML element.
//to wrap a text in quotes you have to use the forward lash \ then the double quotes
function goTown() {
  button1.innerText = "Go to store";
  button2.innerText = "Go to cave";
  button3.innerText = "Fight dragon";
  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;
  text.innerText = "You are in the town square. You see a sign that says \"Store\".";
}
function goStore() {
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "You enter the store.";
   
  }

  function buyHealth(){
    button1.onclick = buyHealth;
  }
  
  function buyWeapon(){
    button2.onclick = buyWeapon;
  }
  // When you have repetition in your code, this is a sign that you need another function.
  // Functions can take parameters, which are values that are given to the function each time it is run. 
  // Here is a function that takes a parameter called param:
  function update(location){
  
  }
 // to create an empty array from a variable
  // arrays can store any data type. they can store objects
  // objects use properties, or keys, to access and modify data.
  // Objects are indicated by curly braces {}. An empty object would look like {}.
  // Object properties are written as key: value pairs, 
  //where key is the name of the property (or the key), 
  //and value is the value that property holds.
  // we separate key value pairs with a comma
  const locations = [
    {
      name: "town square",
      "button text": ["Go to store", 
      "Go to cave", 
      "Fight dragon"],
      "button functions": [goStore, 
      goCave, 
      fightDragon],
      text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {  
      name: "store",
       "button text": ["Buy 10 health (10 gold)", 
       "Buy weapon (30 gold)", 
       "Go to town square"],
      "button functions": [buyHealth, 
      buyWeapon, 
      goTown],
      text: "You enter the store."
    }
  ];