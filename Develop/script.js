"use strict";
// Assignment Code
//declare var passwordLength

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// Chris Gibson-add prompt that pops up when generate button is clicked. declare var PasswordLength and declare function generate password

function generatePassword() {
  var passwordLength;
  passwordLength = prompt("What length do you want your password to be?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters in length");
  }
}
