#! /usr/bin/env node
import inquirer from "inquirer";

// 1) computer will generate a random number - done

// 2) user input for guessimg number

// 3) compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 6 + 1);                          

// const randomNumber = 13;

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between1-6: ",
    },
]);

if(answer.userGuessedNumber === randomNumber){
    console.log("Congratulation you guessed right number")
} else {
    console.log("Sorry you guessed wrong number")
}

console.log(randomNumber);


                          















