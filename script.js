// Variable listing all aceptable password characters
var charOptions = {
lowercase: 'abcdefghijklmnopqrstuvwxyz0123456789',
uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
number: '123456789',
symbol:  "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",


} 





// Assignment Code
var generateBtn = document.querySelector("#generate");

window.alert("Welcome to the Random Password Generator!");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





writePassword();

