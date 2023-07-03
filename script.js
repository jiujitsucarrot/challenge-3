// Assignment Code.
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Prompt password length.
  var length = parseInt(prompt("Password length (between 8 and 128 characters):"));


  // Verify password length.
  if (length < 8 || length > 128) {
    alert("Invalid password length. Try again.");
    return "";
  }

  // Prompt uppercase y/n
  var includeUpperCase = confirm("Include Uppercase Characters?");

  // Prompt lowercase y/n
  var includeLowerCase = confirm("Include Lowercase Characters?");

  // Prompt numeric y/n
  var includeNumeric = confirm("Include Numeric Characters?");

  // Prompt special y/n
  var includeSpecial = confirm("Include Special Characters?");

  if (!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected. Please try again.");
    return "";
  }

  // Define Characters
  // Uppercase Characters
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Lowercase Characters
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";

  // Numeric Characters
  var numericChars = "1234567890";

  // Special Characters
  var specialChars = "`~!@#$%^&*()-_=+{}[]<>?/.,";

    // Build character set
    var charSet = "";

    if (includeUpperCase) {
      charSet += upperCaseChars
    }
  
    if (includeLowerCase) {
      charSet += lowerCaseChars
    }
  
    if (includeNumeric) {
      charSet += numericChars
    }
  
    if (includeSpecial) {
      charSet += specialChars
    }
  
    // Create password
    var password = "";
  
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet.charAt(randomIndex);
    }
  
    return password;


}

// Write password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);
