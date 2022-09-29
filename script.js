"use strict";
// Assignment Code

//storing varibales below outside of function so that I can use the variables later outside of the function
//removing global variables and putting into functions
// var passwordLength;
// var lowercase;
// var uppercase;
// var numbers;
// var specialCharacters;

//declaring empty array to hold user input
var passwordArray = [];
var characterBank = [];

//declaring variables of  all the options for characters below
var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersList = "0123456789";
var specialcharactersList = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

///creating new arrays below that contain all the charcaters of the arrays above, but this time each character is spilt up individually.

var lowerAlphabetArray = lowerAlphabet.split("");
var upperAlphabetArray = upperAlphabet.split("");
var numbersListArray = numbersList.split("");
var specialcharactersListArray = specialcharactersList.split("");

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

//add generate Password function below that generates prompts  when generate button is clicked. prompts to ask user what characters they want included in the pasword. Conditionals added that specify if user click 'ok' in confrim window then the character array should be added to the characterbank array.
function generatePassword() {
  var passwordLength = prompt(
    "How many characters do you want your password to contain?"
  );
  //alert if user inputs NaN. called generate password function again if user triggered this alert so that the prompt workflow restarts from beginning.
  if (isNaN(passwordLength)) {
    alert("you must enter a number");
    generatePassword();
  }
  //alert if user inputs length less than 8 or greater than 128. called generate password function again if user triggered this alert so that the prompt workflow restarts from beginning.
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters in length");
    generatePassword();
  }
  //turning string input of password length into number and putting it into a variable
  var inputtedPasswordLength = parseInt(passwordLength);

  var lowercase = confirm(
    "Do you want to include any lowercase characters in your password?"
  );
  if (lowercase === true) {
    characterBank = [...characterBank, ...lowerAlphabetArray];
  }
  var uppercase = confirm(
    "Do you want to include any uppercase characters in your password?"
  );
  if (uppercase === true) {
    characterBank = [...characterBank, ...upperAlphabetArray];
  }
  var numbers = confirm("Do you want to include any numbers in your password?");

  if (numbers === true) {
    characterBank = [...characterBank, ...numbersListArray];
  }

  var specialCharacters = confirm(
    "Do you want to include any special characters in your password?"
  );

  if (specialCharacters === true) {
    characterBank = [...characterBank, ...specialcharactersListArray];
  }

  //conditional to check if user clicked ok on at least 1 character type
  if (
    specialCharacters == false &&
    numbers == false &&
    uppercase == false &&
    lowercase == false
  ) {
    //alert if user didnt select at least on of the character types
    alert("password must contain at least one character type");
    generatePassword();
  }
  //for loop that loops through character bank and selects a random character each time until it reachs the users inputted password length.
  for (var i = 0; i < inputtedPasswordLength; i++) {
    var random =
      characterBank[Math.floor(Math.random() * characterBank.length)];

    passwordArray = [...passwordArray, random];
  }

  return passwordArray.join("");
}
