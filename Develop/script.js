// Assignment code here
var characterLength = 8
var choice = []
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ]
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ]
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ]
var special = ['!', '$', '%', '^', '&', '*', '(', ')', '+', ]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts()
  
  if (correctPrompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

function generatePassword() {
  var password = ""
  for (var i = 0; i < characterLength; i++) {
    var randomCharacter = Math.floor(Math.random() * choice.length)
    password = password + choice[randomCharacter]
  }
  return password
}

function getPrompts() {
  choice = []
  characterLength = parseInt(prompt("How many characters would you like your password to be? (8-128)"))
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Please enter a number between 8 and 128")
    return false
  }
  if (confirm("Would you like Lowercase letters?")) {
    choice = choice.concat(lower)
  }
  if (confirm("Would you like Uppercase letters?")) {
    choice = choice.concat(upper)
  }
  if (confirm("Would you like Numbers?")) {
    choice = choice.concat(number)
  }
  if (confirm("Would you like Special Characters?")) {
    choice = choice.concat(special)
  }
  return true

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);