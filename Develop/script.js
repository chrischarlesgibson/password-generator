"use strict";
// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// Chris Gibson-add prompt that pops up when generate button is clicked. then added prompts to ask user what characters they want included in the pasword.

function generatePassword() {
  var passwordLength;
  passwordLength = prompt(
    "How many characters do you want your password to contain?"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters in length");
  }
  var lowercase;
  lowercase = confirm(
    "Do you want to include any lowercase characters in your password?"
  );
  var uppercase;
  uppercase = confirm(
    "Do you want to include any uppercase characters in your password?"
  );
  var numbers;
  numbers = confirm("Do you want to include any numbers in your password?");

  var specialCharacters;
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
  }
}
