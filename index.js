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

const init= () =>{
askQuestion()
.then((data) =>       
fs.writeFile("./dist/index.html", generateHTML(data)))
.then(() => console.log('Successfully wrote to index.html'))
.catch((err) => console.error(err));

 };


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


};

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

// const generateHTML = (boss, tech, student) => {
//   console.log(boss, tech, student);
  
//   let finalHTML = header;
  
//   boss.forEach(i => {
//       let bosscard = createManager(i);
//       finalHTML += bosscard
//   })
//   tech.forEach(i => {
//       let techcard = createEngineer(i);
//       finalHTML += techcard
//   })
//   student.forEach(i => {
//       let studentcard = createIntern(i);
//       finalHTML += studentcard
//   })
//   return finalHTML;
//   };



