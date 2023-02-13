// Assignment code here
function generatePassword() {
  var password = "";
  for(var i = 0; i < passLength; i++) { //the password starts at 0 and it goes until it is a long as "passlength" by adding 1 at a time -DT
      var randLength = Math.floor(Math.random() * randPass.length); //Math floor rounds the number down. Math random generates a random number from 0 to 1 and it is multiplied
      //by the length of the randomly generated password array length. 
      password = password + randPass[randLength]; //the password is reassigned to add the length of the array -DT
  }
  return password; //function "generatePassword" outputs the new stored password -DT
}

var randPass = []; //initializes the randPass array value as empty -DT

function userInput(){
  randPass = []; //this re initializes the randpass every time the userInput function is called so it doesnt stack values and keep adding the user input -DT
  var lowerChar = 'abcdefghijklmnopqrstuvwxyz'.split(''); //this is the possible lowercase characters in one string and then cut apart using the split function -DT
  var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var special = ',!#$%^&*()_=+{}][<>.?/`'.split('');
  var numbers = '0123456789'.split('');
  passLength =prompt("How many characters (8-128)"); //this creates the input from user for how long the password will be -DT

  if(passLength <8 || passLength > 128) { //this tests if the above input is within the parameters give by readme 8-128 characters. if not, it returns false and ends program. -DT
  return false;
  }
  if (confirm("would you like lowercase letters?")){ //asking if yes or no for lowercase -DT
    randPass = randPass.concat(lowerChar);
  }
  if (confirm("would you like uppercase letters?")){ //ditto -DT
    randPass = randPass.concat(upperChar);
  }
  if (confirm("would you like special characters?")){ //ditto -DT
    randPass = randPass.concat(special);
  }
  if (confirm("would you like numbers?")){ //ditto -DT
    randPass = randPass.concat(numbers);
  }
  return true; //once all the prompts are answered, userInput returns true to move on to the next step -DT
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //creates a varbiable based on the ID tag in the HTML dociment (line 28) "generate" -DT

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //this watches the "generate" tag / "generateBtn variable" to see when it is clicked and runs the 
// "writePassword" fucntion when the button is clicked. -DT


// Write password to the #password input
function writePassword() {
  var goodPass = userInput(); //if userInput returns true, goodPass stored as true. -DT
  var passwordText = document.querySelector("#password"); //this grabs the password ID tag(line 22 HTML) to set variable passwordText. -DT
  
  if(goodPass){ //if goodPass value is true, it runs the next lines. -DT
    var newPassword = generatePassword(); //this sets the value of newPassword equal to the output of generatePassword -DT
    passwordText.value = newPassword; //this sets the value of newPassword to the passwordText value in line 51 of hte JS. -DT
  } else {
      return false; //this condition runs if goodpass is false. -DT
  }
}

