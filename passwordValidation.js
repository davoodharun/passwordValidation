
//  *******************************************  PASSWORD VALIDATION  ***********************************************************

// PASSWORD VALIDATION HELPER FUNCTIONS

// checks if password has an uppercase and lowercase letter
var isMixedCase = function(str) {
  // checks whether str is all uppercase or all lowercase
  return str !== str.toUpperCase() && str !== str.toLowerCase(); 
}

// checks if password is greater or equal to 8 characters and less than or equal to 16 characters
var hasCorrectLength = function(str, min, max) {
  var min = min || 8;
  var max = max || 16;
  return str.length >=min && str.length <=max;
}

// check if password contains special character
var containsSpecialCharacter = function(str, specialCharacters) {
  var specialCharacters = specialCharacters || '!@#$%^&*', hasSpecialCharacter = false;
  for(var i = 0; i<str.length;i++) {
    if(hasSpecialCharacter){
      return true;
    }
    if(specialCharacters.includes(str[i])) {
      hasSpecialCharacter = true;
    }
  }
  return false;
}

// checks if password contains only letters and special characters
var containsOnlyLettersAndSpecialCharacters = function (str, specialCharacters) {
  var alphabeticCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  var specialCharacters = specialCharacters || '!@#$%^&*';
  var characterChoices = alphabeticCharacters.concat(specialCharacters);
  for(var i = 0; i<str.length; i++) {
    if(!characterChoices.includes(str[i])) {
      return false;
    }
  }
  return true;
}

// PASSWORD VALIDATION EVAL FUNCTION
var isPasswordValid = function(str, specialCharacters) {
  return isMixedCase(str) && hasCorrectLength(str) && containsSpecialCharacter(str) && containsOnlyLettersAndSpecialCharacters(str);
}


//  *************************************  RANDOM PASSWORD GENERATOR  **************************************

// RANDOM PASSWORD GENERATOR HELPERS

// generate a random number within a range
var generateRandomNumberInRange = function (min,max) {
  return Math.floor(Math.random()*(max-min)+min);
}

// randomly shuffle string algorithm
var shuffle = function shuffle(string) {
  var charactersToBeShuffled = string.length, t, i;

  // while current element is not 0
  while (charactersToBeShuffled) {
    // Pick a random remaining element
    randomCharacter = Math.floor(Math.random() * charactersToBeShuffled--);
    // swap with the current element.
    t = string[charactersToBeShuffled];
    string[charactersToBeShuffled] = string[randomCharacter];
    string[randomCharacter] = t;
  }

  return string;
}

//generate random password
var generateRandomPassword = function(mix, max, specialCharacters) {
  var max = max || 16;
  var min = min || 8;
  var specialCharacters = specialCharacters || '!@#$%^&*';
  var choices = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz', specialCharacters];
  var password = '';
  password = password.concat(choices[0][generateRandomNumberInRange(choices[0].length-1, 0)]);
  password = password.concat(choices[1][generateRandomNumberInRange(choices[1].length-1, 0)]);
  password = password.concat(choices[2][generateRandomNumberInRange(choices[2].length-1, 0)]);

  var randomPasswordStringLength = generateRandomNumberInRange(max + 1, min);
  

  for(var i = 3; i<=randomPasswordStringLength;i++) {
    var randomChoice = generateRandomNumberInRange(3,0);
    password = password.concat(choices[randomChoice][generateRandomNumberInRange(choices[randomChoice].length-1,0)]);
  }

  return shuffle(password);
}

// TEST
// var password = generateRandomPassword(8, 16)
// console.log(password)
// console.log(isPasswordValid(password))
// console.log(isMixedCase(password), 'mixed case test')
// console.log(hasCorrectLength(password, 8, 16), 'length test');
// console.log(containsSpecialCharacter(password), 'specialCharacter test')
// console.log(containsOnlyLettersAndSpecialCharacters(password), 'only special characters and letters test')