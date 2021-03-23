const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML= require("./generateHTML.js"); 
const mockup = require("./src/mockup.html");
const styles = require("./src/styles.css"); 


const employees = []

const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the employee's name?",
  },
  {
    type: "list",
    name: "role",
    message: "What is the employee's role",
    choices: ["Manager", "Engineer", "Intern"],
  },
  {
    type: "input",
    name: "email",
    message: "What is the employee's email address",
  },
  {
    type: "input",
    name: "officeNum",
    message: "What is the office number?",
  },
  {
    type: "input",
    name: "userName",
    message: "What is the Github user name?",
  },
  {
    type: "input",
    name: "school",
    message: "What is the name of the school?",
  },
  {
    type: "list",
    name: "team",
    message: "Are you finished building your team?",
    choices: ["YES", "NO"],
  },
];

// TODO: Create a function to write HTML file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName,data, (err) => err ? console.log
  (err):  console.log ("website created"))    
  }; 





// TODO: Create a function to initialize app

function init()
inquirer.prompt(questions)
.then(data => {
writeToFile ("team.html", generateHTML(data))

})
init()

