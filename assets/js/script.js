// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function() {

  var passwordLength = window.prompt("Please enter the desired password length with a minimum of '8' and maximum of '128'.");

  if (passwordLength >= 8 && passwordLength <= 128){
    window.alert("correct")
    console.log(passwordLength);
  }
  else {
    window.alert("Sorry you need to provide a valid answer please try again.");
    return generatePassword();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

