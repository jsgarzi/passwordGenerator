var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
    
    var passwordLength = false;
    var passwordCharSelect = true;
    var numCount = 0;
    var upperCount = 0;
    var lowerCount = 0;
    var specialCount = 0;

    //length check
    while (passwordLength === false) {
        var pwL = prompt("How long do you want your password to be?\nPlease input a number between 8-128.");
        if (pwL >= 8 && pwL <= 128) {
            passwordLength = true;
        }
        else {
        alert("To create a password please input a number between 8 and 128");
        }
    }

    // character arrays
    var numUTF = [
        [48, 57]
    ];
    var upperUTF = [
        [65, 90]
    ];
    var lowerUTF = [
        [97, 122]
    ];
    var specialUTF = [
        [33, 47],
        [58, 64],
        [91, 96],
        [123, 126]
    ];

    var selectedArrays = [] //key of selected arrays

    //character select
    while (passwordCharSelect === true) {
        if (confirm("Do you want numbers in your password?")) {
            var numArray = UTFConvert(numUTF, numUTF.length);
            passwordCharSelect = false;
            selectedArrays.push("n");
            numCount ++;
        };
        if (confirm("Do you want special characters in your password?")) {
            var specialArray = UTFConvert(specialUTF, specialUTF.length);
            passwordCharSelect = false;
            selectedArrays.push("s");
            specialCount ++;
        };
        if (confirm("Do you want lower case letters in your password?")) {
            var lowerArray = UTFConvert(lowerUTF, lowerUTF.length);
            passwordCharSelect = false;
            selectedArrays.push("l");
            lowerCount ++;
        };
        if (confirm("Do you want upper case letters in your password?")) {
            var upperArray = UTFConvert(upperUTF, upperUTF.length);
            passwordCharSelect = false;
            selectedArrays.push("u");
            upperCount ++;
        };

        if (passwordCharSelect === true) {
            alert("Please select at least one character type to create a password...");
        }
        
    }

    // determine the number of each selected char type
    while ( numCount + specialCount + lowerCount + upperCount < pwL){
        var index = Math.floor(Math.random() * selectedArrays.length);
        if (selectedArrays[index] == "n") {
            numCount ++;
        }
        else if (selectedArrays[index] == "s") {
            specialCount ++;
        }
        else if (selectedArrays[index] == "l") {
            lowerCount ++;
        }
        else {
            upperCount ++;
        }
    }

    // Replacement of placeholder values w/ password values
    var indexArray = [];
    var password = '';
    while ( numCount + specialCount + lowerCount + upperCount > 0 ) {
        var index = Math.floor(Math.random() * selectedArrays.length);
        if (selectedArrays[index] == "n" && numCount > 0) {
            numCount --;
            password = password + randomChar(numArray);
        }
        else if (selectedArrays[index] == "s" && specialCount > 0) {
            specialCount --;
            password = password + randomChar(specialArray);

        }
        else if (selectedArrays[index] == "l" && lowerCount > 0) {
            lowerCount --;
            password = password + randomChar(lowerArray);

        }
        else if (selectedArrays[index] == "u" && upperCount > 0){
            upperCount --;
            password = password + randomChar(upperArray);
        }
    }

    return(password);
}

//UTF conversion (into the actual characters (contrived))
function UTFConvert(arr, arrLength) {

    var charArray = [];
    for (var i = 0; i < arrLength; i++) {
        var loopStart = arr[i][0];
        var loopend = arr[i][1];
        for (var n = loopStart; n <= loopend; n++) {
            charArray.push(String.fromCharCode(n));
        }
    }
    return (charArray) //return the info to each selected array
}

function randomChar(characterArray) {
    var index = Math.floor(Math.random() * characterArray.length);
    return(characterArray[index]);
}