// 1. When I click the button, it prompts with password criteria.
// 2. When prompted I click to select which criteria I will use.
// 3. When prompted for the length, I make it no less than 8 characters, and no more than 128 characters
// 4. When prompted for character types, i choose lowercase, uppercase, numeric and/or special keys.
// 5. When i answer each prompt, a validation message should occour, followed by the use of one of the character types above.
// 6. when all prompts are answered, I will be able to randomly generate a password with said click of the button.
// 7. When the password is generated, I am then met with an alert of the password name, and/or a display of it in the textbox.




// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  //stored text for the password between each prompt
  var str = " ";
  // Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
  var strLowerCased = prompt("Do you want lower cased letters? y/n");

  if (strLowerCased = "y") {
    strLowerCased = true;
    if(strLowerCased = true){ 
        str = str + lowerCasedCharacters;
     }
  }

  var strUpperCased = prompt("Do you want upper cased letters? y/n");

  if (strUpperCased = "y") {
    strUpperCased = true;
    if(strUpperCsed = true){
      str = str + upperCasedCharacters;
    }
  }

  var strSpecialCharacters = prompt("Do you want special characters? y/n");

  if (strSpecialCharacters = "y") {
    strSpecialCharacters = true;
    if(strSpecialCharacter = true){
      str = str + specialCharacters;
    }
  }

  var strNumericCharacters = prompt("Do you want numeric numbers? y/n");

  if (strNumberCharacters = "y") {
    strNumericCharacters = true;
    if(strNumericCharacters = true){
      str = str + numericCharacters;
    }
  }
  var passwordPrompt = prompt("Make the number of characters no less than 8, and no more than 128.");
  var passwordLength = str.length;

  if (passwordLength = (8 > passwordLength && passwordLength < 128)) {

          str.join(" ");
  } else {
    return "please submit a value for the password based off the criteria you've selected."
  }
  


  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  //passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//if (passwordLength