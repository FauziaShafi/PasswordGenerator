// Assignment Code
var passwordLength;

var allChars = " " ;
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  passwordLength= prompt("How many characters would you like your password to contain?");

  if(passwordLength > 8 && passwordLength < 130) {
    ask();
    
  }else if(passwordLength > 129) {
    alert("Password length must be less than 129 characters.");

  } else {
    alert("Password length must be atleast 8 characters");
  }

  return passwordLength;
 
} 


// Write password to the #password input
function writePassword() {
  var passwordLength = generatePassword();
var finalPassword = makepasswordLength(passwordLength);    // calling makepasswordLength by passing argument that user has entered

  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);   


//Function to generate length of password

function makepasswordLength(length) {
  var password = askForUppercase();         
    var text = "";
    var possible = password;
  
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * length));
  
    return text;
  }


// Special character

function ask() {
  var confirmSelection = confirm("click Ok to confirm including special character");
  if(confirmSelection) {
    var allSpecial = "/[!@#$%^&*()_+\-=\[\]{};:";
   allChars = allChars.concat(allSpecial);
   console.log(allChars);

   askForNumeric();

  } else {
    askForNumeric()

  }

}

// Numeric character

 function askForNumeric() {
 var numChar = confirm("click Ok to confirm including numeric character");
 if(numChar) {

  var allnumber = "0123456789";
   allChars = allChars.concat(allnumber) ;
   console.log(allChars);
  askForLowercase();
 } else {
  askForLowercase();
 }
}

// LowerCase function
function askForLowercase() {

 var useLowercase = confirm("click Ok to confirm include lowercase letter");
 
if(useLowercase) {
  var allLowercase ="abcdefghijklmnopqrstuvwxyz";
  
  allChars = allChars.concat(allLowercase);
  console.log(allChars)
  console.log("lowercase function is running - ");
  askForUppercase();
  
  } else {
    askForUppercase();
  }


}

//Upper case

function askForUppercase() {

  var useLowercase = confirm("click Ok to confirm include uppercase letter");
 
 if(useLowercase) {

  var lowercase ="abcdefghijklmnopqrstuvwxyz";

  var allUppercase = lowercase.toUpperCase();
  allChars = allChars.concat(allUppercase);
  console.log(allChars);
  console.log("Uppercase function is running - " );
   
  
    } 
    return allChars;
  }