// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}


// Object containg all aceptable password characters 
var charOptions = {
lowercase: 'abcdefghijklmnopqrstuvwxyz0123456789',
uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
number: '123456789',
symbol:  "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
};

// Password criteria prompts

  window.alert("Welcome to the Random Password Generator!");

window.alert("Your unique password must be between 20 and 128 characters");

window.prompt("How long you would like you password to be?");


// Variables for Password options

var includeLowercase = confirm("Would you like to use any lowercase letters?");

var includeUppercase = confirm("Would you like to use any UPPERCASE letters?");

var includeNumbers = confirm("Would you like to use any numbers?");

var includeSpecChars = confirm("Would you like to use any special characters?");

var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz0123456789';

var uppercaseCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var numberChars = '123456789';

var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var allChars = "";




// IF Statement to handle user input

if (includeLowercase === true)



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





writePassword();








