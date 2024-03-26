#! /usr/bin/env node
import inquirer from "inquirer";
const number = Math.floor(Math.random() * 10 +1);
const result = await inquirer.prompt([
    {
        name: "gusseing_game",
        type: "number",
        message: "Please guess a number between 1-10: ",
    },

]);

//condition
if(result.gusseing_game === number){
    console.log("Congratulation you guess a right number");

}
else{
    console.log("Wrong number, try again");
}