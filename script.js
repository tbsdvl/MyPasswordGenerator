// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);

// Password generator function
function generatePassword(){

  // Create arrays containing all my potential characters to generate into the new password
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
  'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ';', ':', '"', ',', '.', '/', '[', ']', '|', '`', '~'];

   // Provide user with different prompts to select password criteria
   var userChoices = {
    lower: prompt("Lowercase Characters? (Yes/No): ", "Yes"),
    upper: prompt("Uppercase Characters? (Yes/No): ", "Yes"),
    numbers: prompt("Numbers? (Yes/No): ", "Yes"),
    special: prompt("Special Characters? (Yes/No): ", "Yes"),
    passLength: prompt("Enter a number between 8 and 128 to set the length of your new password.")
  };

  // Sets a minimum and maximum amount of 8 and 128 respectively to constrain the
  // password's length
  var passLimit = ((userChoices.passLength >= 8) && (userChoices.passLength <= 128));

  // Creates an empty string type variable for the new password
  var newPassword = "";

  // Until the loop meets the user's limit, add new characters from 
    // each selection to my newly generated password
    while(userChoices.passLength >= newPassword.length){

      // Randomly select values inside each array given a user keeps the criteria
      // Not selecting criteria will add no values from the specified arrays
      if(passLimit){
      let lowerSelected = (userChoices.lower === "Yes") ? lowercase[Math.floor(Math.random() * lowercase.length)] : "";
      let upperSelected = (userChoices.upper === "Yes") ? uppercase[Math.floor(Math.random() * uppercase.length)] : "";
      let numberSelected = (userChoices.numbers === "Yes") ? numbers[Math.floor(Math.random() * numbers.length)] : "";
      let specialSelected = (userChoices.special === "Yes") ? special[Math.floor(Math.random() * special.length)] : "";

      // The new password will concatenate each new value from the arrays and populate a new string
      newPassword = newPassword.concat(
        lowerSelected, 
        upperSelected, 
        numberSelected, 
        specialSelected)}}};