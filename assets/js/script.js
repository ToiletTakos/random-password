// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// when generate password button is pressed 
var generatePassword = function() {
  // user is prompted to enter a number for the length of password
  var passwordLength = window.prompt("Please enter the desired password length with a minimum of '8' and maximum of '128'.");
  // password number is within the requested paramiters
  if (passwordLength >= 8 && passwordLength <= 128){
    selections();
  }
  // user entered a number outside the parameters and is asked to re enter
  else {
    window.alert("Sorry you need to provide a valid answer please try again.");
    return generatePassword();
  }
}

// Selectors for user to pick for their password
var selections = function() {
  window.alert("You will be give 4 options, you must select at least one.")
  var lettersLower = window.confirm("Do you want your password to have 'Lower case' characters? Ok for yes, Cancel for no" );
  var lettersCapital = window.confirm("Do you want your password to have 'Upper case' characters? Ok for yes, Cancel for no");
  var numbers = window.confirm("Do you want your password to have 'Numbers'? Ok for yes, Cancel for no");
  var Symbols = window.confirm("Do you want your password to have 'Symbols'? Ok for yes, Cancel for no");

  // check to see if at lease one option was picked
  if (lettersLower === true || lettersCapital === true || numbers === true || Symbols === true){

  }
  // nothing is picked so the user is alerted and sent back to restart the selection process
  else {
    window.alert("You didnt select any of the options, please try again.")
    return selections();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

