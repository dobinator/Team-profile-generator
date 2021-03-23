const inquirer = require("inquirer");
const fs = require("fs");
// const generateHTML = require("./generateHTML.js");
// const mockup = require("./src/mockup.html");
// const styles = require("./src/styles.css");

const employees = [];

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

function askQuestion() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((data) => {
      if (data.role === "Manager") {
        addManager();
      } else if (data.role === "Engineer") {
        addEngineer();
      } else if (data.role === "Intern") {
        addIntern();
      } else {
        init();
      }
    });
}

function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email address?",
      },
      {
        type: "input",
        name: "officeNum",
        message: "What is the office number?",
      },
      {
        type: "list",
        name: "team",
        message: "Are you finished building your team?",
        choices: ["YES", "NO"],
      }

    ])
    .then((data) => {
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNum
      );
      employees.push(manager);
      console.log(employees);
      askQuestion();
    });
}
askQuestion();

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "gitHub",
        message: "What is the Github user name?",
      },
    ])
    .then((data) => {
      const engineer = new Engineer(data.gitHub);
      employees.push(engineer);
      console.log(engineer);
      askQuestion();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "What is the name of the school?",
      },
    ])
    .then((data) => {
      const intern = new Intern(data.school);
      emoployees.push(intern);
      console.log(intern);
      askQuestion();
    });
}

// TODO: Create a function to write HTML file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("website created")
  );
}

// TODO: Create a function to initialize app

// function init()
// inquirer.prompt(questions)
// .then(data => {
// writeToFile ("team.html", generateHTML(data))

// })
// init()
