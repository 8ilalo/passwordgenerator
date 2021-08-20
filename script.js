// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = "abcdefghijklmnopqstuvwxyz!#$%()*+,-./:;<=>?@[]\^_`{}|~0123456789ABCDEFGHIJKLMNOPQSTUVWXYZ"
var stored = [];
var letter = true;



// CODE GOES HERE
function generatePassword() {
  var length = 8;
  var password = "";

  letter = confirm('do you want letters?')
  number = confirm('do you want numbers?')
  special = confirm('do you want special characters?')

  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * letters.length);
    password += letters[random]; 
  }
  
  
  console.log(password);

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
