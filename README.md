# passwordValidation

# Main Functions
- isPasswordValid
  - Description: function that tests whether a string passes certain parameters set by the owner
  - Parameters:
    - str: string to be tested
    - minLength: (Integer) minimum length of password; if ommitted, parameter will default to 7 
    - maxLength: (Integer) maximum length of password; if ommitted, parameter will default to 16 
    - specialCharacters: (String) special characters that are allowed in password; if ommited, parameter will default to '!@#$%^&*'
- generateRandomPassword
  - Description: generates random valid password that adheres to certain parameters
  - Parameters:
    - minLength: (Integer) minimum length of password (exclusive); if ommitted, parameter will default to 7 
    - maxLength: (Integer) maximum length of password (inclusive); if ommitted, parameter will default to 16 
    - specialCharacters: (String) special characters that are allowed in password; if ommited, parameter will default to '!@#$%^&*'

# Helper Functions
  - isMixedCase: checks if string has both upppercase and lowercase letters
  - hasCorrectLength: checks if string length is in a given range
  - containsSpecialCharacter: checks if string contains character from given list of special characters
  - containsOnlyLettersAndSpecialCharacters: checks if string is only made up of letters and given list special characters
  - generateRandomNumberInRange: generates random integer between given min(inclusive) and max(exclusive)
  - shuffle: randomly shuffles string
