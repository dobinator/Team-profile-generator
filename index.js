const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML.js");

const styles = require("./src/styles.css");

const boss = [];
const tech = [];
const student = []; 

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

function init(){
// calls the askQuestion function
// prompt the user with the first question
//runs through the questions, return the team data back to the init
//the init function should have a .then()call back function that will begin rendering the html, use writeFile


}

function askQuestion() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"],
      },
     {
     type: "list",
     name: "team", 
     message: "Are you done building your team?",
     choices: ["Yes", "No"],
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
        name: "teamDone",
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
      boss.push(manager);
      console.log(boss);
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
      tech.push(engineer);
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
      student.push(intern);
      console.log(intern);
      askQuestion();
    });
}

const generateHTML = (boss, tech, student) => {
  console.log(boss, tech, student);
  
  let finalHTML = header;
  
  boss.forEach(i => {
      let bosscard = createManager(i);
      finalHTML += bosscard
  })
  tech.forEach(i => {
      let techcard = createEngineer(i);
      finalHTML += techcard
  })
  student.forEach(i => {
      let studentcard = createIntern(i);
      finalHTML += studentcard
  })
  return finalHTML;
  };


// TODO: Create a function to write HTML file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("website created")
  );
}


writeToFile()

