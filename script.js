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
  function goCave() {
    update(locations[2]);
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
// The innerText property controls the text that appears in an HTML element.
// to wrap a text in quotes you have to use the forward lash \ then the double quotes
// to call a function
// You pass arguments by including them within the parentheses of the function call.
// This is called bracket notation. Values in an array are accessed by index. 
// Indices are numerical values and start at 0 - this is called zero-based indexing. 
// arg[0] would be the first element in the arg array. 
function goTown() {
  update(locations[0]);
}


function goStore() {
    /*button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "You enter the store.";*/
    update(locations[1]);
  }
// There is a shorthand way to add or subtract from a variable called compound assignment.
  function buyHealth(){
    button1.onclick = buyHealth;
    gold -= 10;
    goldText.innerText = gold;
    health += 10;
    healthText.innerText = health;
  }
  
  function buyWeapon(){
    button2.onclick = buyWeapon;
  }
  // When you have repetition in your code, this is a sign that you need another function.
  // Functions can take parameters, which are values that are given to the function each time it is run. 
  // Here is a function that takes a parameter called param:
  // That way, you use bracket notation to get the "button text" property of the location object passed into the function.
  function update(location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
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
    },
    {  
      name: "cave",
       "button text": ["Fight slime", 
       "Fight fanged beast", 
       "Go to town square"],
      "button functions": [fightSlime, 
      fightBeast, 
      goTown],
      text: "You enter the cave. You see some monsters."
    }
  ];
  function fightSlime(){

  }
  function fightBeast(){
    
  }
  // Dealing with If statements
  //  When you want to run code conditionally, you can use the if statement.
  // An if statement is used to make decisions in code.
  // he keyword if is followed by a condition in parentheses.
  //  If the condition is true, the code inside the curly braces {} is executed.
  //  If the condition is false, the code inside the curly braces is skipped.
  // adding an else statement does not agree with  the first condition
  // both if and else statements are condition statements
  function buyHealth() {
    if(gold >= 10) {
      gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
    }  else {
      text.innerText = "You do not have enough gold to buy health."
    }
  }

  const weapons = [
    { 
      name: "stick", 
      power: 5 
      
  },
    { 
      name: "dagger", 
      power: 30 
      
      },
    { 
      name: "claw hammer", 
      power: 50 
    },
    { 
      name: "sword", 
      power: 100 
      
      }
  ];
  // Increasing a value by 1, or incrementing, has a special operator in JavaScript: ++. 
  // If you wanted to increase num by 1, you could write num++.
  function buyWeapon() {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;

      goldText.innerText = gold;

      let newWeapon = weapons;
      text.innerText = "You now have a new weapon.";
    }
  }