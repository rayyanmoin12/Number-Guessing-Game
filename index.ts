#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber: number = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([{
    type: "number",
    name: "userGuess",
    message: "Please guess a number between 1 and 10:",
},
]);

console.log(answers);

if (randomNumber === answers.userGuess){
    console.log("You have guessed correctly!");
} else {
    console.log("You have guessed wrong.");
}
