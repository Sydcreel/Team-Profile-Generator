const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questionSwitch = require("./lib/Questions");
const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/template.js");


let teamMembers = [];

function appMenu() {
  
  function buildManager() {
    console.clear();
    console.log("Build your team's roster!");
    return questionSwitch("manager");
  }
  
  function buildEngineer() {
    return questionSwitch("engineer");
  }
  
  function buildIntern() {
    return questionSwitch("intern");
  }
  
  function mainMenu() {
    console.clear();
    return inquirer
      .prompt([
        {
          type: "list",
          name: "menuChoice",
          message: "Would you like to add another team member?",
          choices: ["Add Engineer", "Add Intern", "No"],
        },
      ])
      .then((selection) => {
        switch (selection.menuChoice) {
          case "Add Engineer":
            
            buildEngineer()
              .then((engineerData) => {
                return new Engineer(
                  engineerData.name,
                  engineerData.id,
                  engineerData.email,
                  engineerData.github
                );
              })
              .then((engineer) => {
                teamMembers = [...teamMembers, engineer];
                mainMenu();
              });
            break;
          case "Add Intern":
            
            buildIntern()
              .then((internData) => {
                return new Intern(
                  internData.name,
                  internData.id,
                  internData.email,
                  internData.school
                );
              })
              .then((Intern) => {
                teamMembers = [...teamMembers, Intern];
                mainMenu();
              });
            break;
          default:
            
            generatePage(teamMembers).then((teamHtml) => {
              console.log("Writing HTML. Check it out at dist/index.html");
              return fs.writeFile("./dist/index.html", teamHtml, (err) => {
                if (err) console.log(err);
              });
            });
        };
      });
  }

  buildManager()
    .then((managerData) => {
      return new Manager(
        managerData.name,
        managerData.id,
        managerData.email,
        managerData.officeNumber
      );
    })
    .then((manager) => {
      teamMembers = [...teamMembers, manager];
      mainMenu();
    });
}

appMenu();