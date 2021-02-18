var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

character = ["!","#","$","%","&","*"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
upper= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var choices;

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    button = generatePassword();
    document.getElementById("password").placeholder = button;
});

function generatePassword() {
    enter = parseInt(prompt("Choose Between 8 and 128 Characters"));
        if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
      enter = parseInt(prompt("Please stay within the Criteria"));

    } else {
        confirmNumber = confirm("Would you like numbers?");
        confirmCharacter = confirm("Would you like special characters?");
        confirmUppercase = confirm("Would you like Uppercase letters?");
        confirmLowercase = confirm("Would you like Lowercase letters?");
    };

    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");
    }
    
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character = [...number, ...letter, ...upper];
    }
    // Else if for 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character = [...number, ...upper];
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character = [...number, ...letter];
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character = [...letter, ...upper];
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number = [...letter, ...upper];
    }
    // Else if for 2 positive options 
    else if (confirmCharacter && confirmNumber) {
        choices = character = [number];

    } else if (confirmCharacter && confirmLowercase) {
        choices = character = [letter];

    } else if (confirmCharacter && confirmUppercase) {
        choices = character = [upper];
    }
    else if (confirmLowercase && confirmNumber) {
        choices = letter = [number];

    } else if (confirmLowercase && confirmUppercase) {
        choices = letter = [upper];

    } else if (confirmNumber && confirmUppercase) {
        choices = number = [upper];
    }
    // Else if for 1 positive option
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = letter;
    }
    // Created space variable to fill uppercase conversion
    else if (confirmUppercase) {
        choices = upper = [upper];
    };

    
    var password = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    // Worked with a tutor to incorporate this option
    var button = password.join("");
    UserInput(button);
    return button;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});
// This copies the password value - works
// Code example demonstrated in a youtube video: 
// Source: https://youtu.be/9sT03jEwcaw
function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}