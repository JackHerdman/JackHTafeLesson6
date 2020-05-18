// Switch Statement
let userInput = "1";
switch(userInput){ //switch uses the parameter to choose an option to execute
    //must match exactly ie. 1 does not match "1".
    case 1: //you can have multiple cases execute the same thing
    case "1":
        console.log("You have selected option 1");
        break; //dont forget to break each case 
    case "2":
        console.log("You have selected option 2");
        break;
    default: // if the parameter does not match a case it will execute the default
        console.log("Your selection was not recognised")
}

