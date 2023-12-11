

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function to generate a password

function generatePassword() {

  alert("Welcome to the Random Password Generator!");
  alert("Your unique password must be between 20 and 128 characters");

  var passwordLength = prompt("How long you would like you password to be?");
  var userInput = parseInt(passwordLength);

  if (userInput <= 20 || userInput >= 128) {
    alert("Password length must be between 20 and 128");
    return;
  }


  //// Variables for Password options

  var includeLowercase = confirm("Would you like to use any lowercase letters?");

  var includeUppercase = confirm("Would you like to use any UPPERCASE letters?");

  var includeNumbers = confirm("Would you like to use any numbers?");

  var includeSpecChars = confirm("Would you like to use any special characters?");

  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';

  var uppercaseCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var numberChars = '123456789';

  var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  // var allChars = "";


  // IF Statement to handle user input

  // if (passwordLength == NaN || passwordLength > 20 || passwordLength < 128) {
  //   alert("Password length must be between 20 and 128");
  // }

  var allChars = "";

  if (includeLowercase === true) {
    allChars += lowercaseChars;
  }
  if (includeUppercase === true) {
    allChars += uppercaseCaseChars;
  }
  if (includeNumbers === true) {
    allChars += numberChars;
  }
  if (includeSpecChars === true) {
    allChars += specialChars;
  }
  if (allChars === "") {
    alert("Please select at least one character type.");
    return;

  }


  // generate password
  console.log(allChars)

  var password = "";
  
  for(i = 0; i < userInput; i++) {
    var randomLetter = allChars[Math.floor(Math.random() * allChars.length)]
    // console.log(randomLetter)
    password += randomLetter
  }

  return password;

}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);













