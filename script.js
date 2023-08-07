// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowers = "abcdefghijklmnopqrstuvwxyz"
var numbers = "1234567890"
var specialCharacters = "!@#$%^&*"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var tempPw = ""

  var pwLength = prompt("Between 8 and 128 how many characters would you like your password to be?")

  while (pwLength < 8 || pwLength > 128) {
    alert("Password must be between 8 and 128 characters long!")
    pwLength = prompt("Between 8 and 128 how many characters would you like your password to be?")
  }

  var wantsUppers = confirm("Would you like uppercase letters?")
  if (wantsUppers) {
    tempPw += uppers
  }
  console.log("tempPw = " + tempPw)

  var wantsLowers = confirm("Would you like lowercase letters?")
  if (wantsLowers) {
    tempPw += lowers
  }
  console.log("tempPw = " + tempPw)

  var wantsNumbers = confirm("Would you like numbers?")
  if (wantsNumbers) {
    tempPw += numbers
  }
  console.log("tempPw = " + tempPw)

  var wantsSpecial = confirm("Would you like special characters?")
  if (wantsSpecial) {
    tempPw += specialCharacters
  }
  console.log("tempPw = " + tempPw)

  while (!wantsUppers && !wantsLowers && !wantsNumbers && !wantsSpecial) {
    alert("You must choose at least one character type")
    wantsUppers = confirm("Would you like uppercase letters?")
    if (wantsUppers) {
      tempPw += uppers
    }
    console.log("tempPw = " + tempPw)

    wantsLowers = confirm("Would you like lowercase letters?")
    if (wantsLowers) {
      tempPw += lowers
    }
    console.log("tempPw = " + tempPw)

    wantsNumbers = confirm("Would you like numbers?")
    if (wantsNumbers) {
      tempPw += numbers
    }
    console.log("tempPw = " + tempPw)

    wantsSpecial = confirm("Would you like special characters?")
    if (wantsSpecial) {
      tempPw += specialCharacters
    }
    console.log("tempPw = " + tempPw)
  }

  var password = ""
  for (var i = 0; i < pwLength; i++) {
    password += tempPw.charAt(Math.floor(Math.random() * tempPw.length))
  }

  return password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
