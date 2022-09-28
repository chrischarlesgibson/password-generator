"use strict";
// Assignment Code

//storing varibales below outside of function so that I can use the variables later outside of the function
var passwordLength;
var lowercase;
var uppercase;
var numbers;
var specialCharacters;

//declaring empty array to hold user input
var userInput = [];
//declaring letter, characters and numbers  that the password can have make each varibale below aan array to
var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersList = "0123456789";
var specialcharactersList = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

///array contain above info. thenput conets on the below array into userinput array using spread operator and then can do password generation

var lowerAlphabetArray = lowerAlphabet.split("");
var upperAlphabetArray = upperAlphabet.split("");
var numbersListArray = numbersList.split("");
var specialcharactersListArray = specialcharactersList.split("");

var allArraysCombined = [
  ...lowerAlphabetArray,
  ...numbersListArray,
  ...upperAlphabetArray,
  ...specialcharactersListArray,
];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// Chris Gibson-add generatePassword function below that generates prompts  when generate button is clicked. prompts to ask user what characters they want included in the pasword.Also included alerts if the user inputs too short or long of a password length, inputs NaN or doesnt choose at least one character type. Also call generate password function again if user triggered an alert so that the prompt workflow restarts from beginning.

function generatePassword() {
  passwordLength = prompt(
    "How many characters do you want your password to contain?"
  );

  if (isNaN(passwordLength)) {
    alert("you must enter a number");
    generatePassword();
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters in length");
    generatePassword();
  }
  lowercase = confirm(
    "Do you want to include any lowercase characters in your password?"
  );
  uppercase = confirm(
    "Do you want to include any uppercase characters in your password?"
  );

  numbers = confirm("Do you want to include any numbers in your password?");

  specialCharacters = confirm(
    "Do you want to include any special characters in your password?"
  );
  if (
    specialCharacters == false &&
    numbers == false &&
    uppercase == false &&
    lowercase == false
  ) {
    alert("password must contain at least one character type");
    generatePassword();
  }
  //if statement ot check spec char, lower , upper and number  true and find a way to append to password it will spit out
}
Math.floor(Math.random() * userInput.length);

//returns number 0 to  user arrays length -1
