#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

let todos = [];

let condition = true;

while (condition){
let addtask =await inquirer.prompt([
    {
        name:"todoInput",
        type:"input",
        message:"What you want to add your Todos ?"
    },
    {
        name:"addMore",
        type:"confirm",
        message:"DO you want to Add more ?",
        default:"false"
    }
])
todos.push(addtask.todoInput)
condition = addtask.addMore
console.log(todos);

}



