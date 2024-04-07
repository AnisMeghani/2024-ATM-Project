#! /usr/bin/env node
import inquirer from "inquirer";
//atm banana ha
let balance = 20000;
let pincode = 5556;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "Please enter your pin!",
        type: "number",
    },
]);
if (pinAns.pin === pincode) {
    console.log("Correct pin");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Select your operation",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash Withdraw"],
        },
    ]);
    console.log("Your current Balance is:", `${balance}`);
    if (operationAns.operation === "Withdraw") {
        console.log("Enter amount to withdraw");
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount:",
                type: "number",
            },
        ]);
        if (amountAns.amount <= balance) {
            balance -= amountAns.amount;
            console.log("Your remaining balance is: " + balance);
        }
        else {
            console.log("Your balance is insufficient!");
        }
    }
    // if (operationAns.operation === "Check Balance") {
    //   // console.log("Your balance is: " + balance);
    // }
    if (operationAns.operation === "Fast Cash Withdraw") {
        let fcw = await inquirer.prompt([
            {
                name: "fcOperation",
                message: "Your current balance is" +
                    ` ${balance}` +
                    "\nSelect your option to withdraw",
                type: "list",
                choices: [25000, 20000, 15000],
            },
        ]);
        if (fcw.fcOperation === 25000 && fcw.fcOperation <= balance) {
            console.log("Your remaining balance is: " + (balance - 25000));
        }
        else if (fcw.fcOperation === 20000 && fcw.fcOperation <= balance) {
            console.log("Your remaining balance is: " + (balance - 20000));
        }
        else if (fcw.fcOperation === 15000 && fcw.fcOperation <= balance) {
            console.log("Your remaining balance is: " + (balance - 15000));
        }
        else {
            console.log("Your balance is insufficient");
        }
    }
}
else {
    console.log("incorrect pin");
}
