const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = answers;

 const Employee = require("./lib/Employee.js")
 const Manager = require ("./lib/Manager.js")
 const Engineer = require ("./lib/Engineer.js")
 const Intern = require ("./lib/Intern.js")




 
const Questions = [
  {
    type: "input",
    name: "name",
    message: "What is the employee's name?",
  },
  {
    type: "list",
    name: "role",
    message: "What is the employee's role",
    choices:["Manager", "Engineer", "Intern"], 
  },
  {
    type: "input",
    name: "email",
    message: "What is the employee's email address",
  },
  {
    type: "input",
    name: "userName",
    message: "What is the Github user name?"
  }
];
