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

var selections = function() {
  // Selectors for user to pick for their password
  window.alert("You will be give 4 options, you must select at least one.")
  var lettersLower = window.confirm("Do you want your password to have 'Lower case' characters? Ok for yes, Cancel for no" );
  var lettersCapital = window.confirm("Do you want your password to have 'Upper case' characters? Ok for yes, Cancel for no");
  var numbers = window.confirm("Do you want your password to have 'Numbers'? Ok for yes, Cancel for no");
  var symbols = window.confirm("Do you want your password to have 'Symbols'? Ok for yes, Cancel for no");

  var characters= "";
  // check to see if at lease one option was picked and set the character to the selected options
  if (lettersLower === true && lettersCapital === true && numbers === true && symbols === true){
    characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 !"#$%&()*+,-./:;<>=?@[]\^_`{}|~';
  }
  else if (lettersLower === true && lettersCapital === true && numbers === true){
    characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  }
  else if (lettersLower === true && lettersCapital === true && symbols === true) {
    characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !"#$%&()*+,-./:;<>=?@[]\^_`{}|~';
  }
  else if (lettersLower === true && numbers === true && symbols === true) {
    characters = 'abcdefghijklmnopqrstuvwxyz1234567890 !"#$%&()*+,-./:;<>=?@[]\^_`{}|~';
  }
  else if (lettersCapital === true && numbers === true && symbols === true){
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 !"#$%&()*+,-./:;<>=?@[]\^_`{}|~';
  }
  else if (lettersLower === true && lettersCapital === true) {
    characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  else if (lettersLower === true && lnumbers === true) {
    characters = 'abcdefghijklmnopqrstuvwxyz1234567890';
  }
  else if (lettersLower === true && symbols === true) {
    characters = 'abcdefghijklmnopqrstuvwxyz !"#$%&()*+,-./:;<>=?@[]\^_`{}|~';
  }
  else if (lettersCapital === true && numbers === true) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  }
  else if (lettersCapital === true && symbols === true) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ !"#$%&()*+,-./:;<>=?@[]\^_`{}|~';
  }
  else if (numbers === true && symbols === true) {
    characters = '1234567890 !"#$%&()*+,-./:;<>=?@[]\^_`{}|~';
  }
  else if (lettersLower === true) {
    characters = 'abcdefghijklmnopqrstuvwxyz';
  }
  else if (lettersCapital === true){
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  else if (numbers === true) {
    characters = '1234567890';
  }
  else if (symbols === true) {
    characters = ' !"#$%&()*+,-./:;<>=?@[]\^_`{}|~';
  }
  // nothing is picked so the user is alerted and sent back to restart the selection process
  else if (lettersLower === false && lettersCapital === false && numbers === false && Symbols === false){
    window.alert("You didnt select any of the options, please try again.")
    return selections();
  }

  console.log(characters);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

