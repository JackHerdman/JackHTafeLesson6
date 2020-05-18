//Update your weekly challenge from last week to use a switch statement. 
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}
async function Program() {
    //welcome message
    console.log("Welcome to my Calculator")
    while (true) {
        // List options
        console.log("[1] Add Numbers");
        console.log("[2] Subtract Numbers");
        console.log("[3] Multiply Numbers");
        console.log("[4] Exit");
        //ask user to enter an option
        let userInput = await askQuestion("Select an option from above: ")
        let userInputNum = parseInt(userInput);
        console.log();
        //choose an option based on user input
        shouldLoop = true;
        while (shouldLoop) {
            switch (userInputNum) {
                case 1:
                    //add numbers logic
                    console.log("You have selected the Add Numbers function")
                    let userInput1 = await askQuestion("Enter your first number: ")
                    let num1 = parseInt(userInput1);
                    let userInput2 = await askQuestion("Enter your second number: ")
                    let num2 = parseInt(userInput2);
                    console.log(`${userInput1} plus ${userInput2} equals ${num1 + num2}`);
                    break;
                case 2:
                    //subtract numbers logic
                    console.log("You have selected the Subtract Numbers function")
                    let userInput3 = await askQuestion("Enter your first number: ")
                    let num3 = parseInt(userInput1);
                    let userInput4 = await askQuestion("Enter your second number: ")
                    let num4 = parseInt(userInput2);
                    console.log(`the difference between ${userInput3} and ${userInput4} equals ${num3 - num4}`);
                    break;
                case 3:            //multiply numbers logic
                    console.log("You have selected the Multiply Numbers function")
                    let userInput5 = await askQuestion("Enter your first number: ")
                    let num5 = parseInt(userInput5);
                    let userInput6 = await askQuestion("Enter your second number: ")
                    let num6 = parseInt(userInput6);
                    console.log(`the product of ${userInput5} and ${userInput6} is ${num5 * num6}`);
                    break;

                case 4:            //multiply numbers logic
                    shouldLoop = false;
                    break;
                //exit
                default:
                    console.log("Sorry, I could not determine your input, please try again.");
                    console.log();
                    break;
            }
        }
    }

    console.log("Thank you for using my calculator");
    console.log();


}//your code should not go past here. 


Program().then(() => {
    process.exit(0);
});
