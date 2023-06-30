// Assignment Code.
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Prompt password length.
  var length = parseInt(prompt("Password length (between 8 and 128 characters):"));


  // Verify password length.
  if (length < 8 || length > 128) {
    alert("Invalid password length. Try again.");
    return ("");
  }
  
  // Prompt uppercase y/n

  // Prompt lowercase y/n

  // Prompt numeric y/n

  // Prompt special y/n

  // Create password


}

// Write password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);
