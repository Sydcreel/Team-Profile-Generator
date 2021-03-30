const inquirer = require("inquirer");
const fs = require("fs");
const style = require("./css/css");

const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")

let finalTeamArray =[];

function startPrompt() {
    inquirer.prompt([
        {
            message: "What is your team's name?",
            name: "teamName"
        }
    ])
        .then(function(data){
            const teamName = data.teamName
            finalTeamArray.push(teamName)
            addManager();
        })
}

function addManager() {
    inquirer.prompt([
        {
            message: "What is the team manager's name?",
            name: "name"
        },
        {
            message: "What is your team manager's employee ID?",
            name: "employeeID"
        },
        {
            message: "What is your team manager's email address?",
            name: "email"
        },
        {
            type: "number",
            message: "What is your team manager's office number?",
            name: "officeNumber"
        },
    ])
        .then(function (data) {
            const managerName = data.managerName
            const employeeID = 1
            const email = data.email
            const officeNumber = data.officeNumber
            const teamMember = new Manager(managerName, employeeID, email, officeNumber)
            finalTeamArray.push(teamMember)
            addTeamMember();
        });
}

function addTeamMember() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add another team member?",
            choices: ["Add engineer", "Add intern", "No"],
            name: "addMemberInfo"
        }
    ])
        .then(function (data) {
            switch (data.addMemberInfo) {
                case "Add engineer":
                    addEngineer();
                    break;

                case "Add intern":
                    addIntern();
                    break;
                case "No":
                    createTeam();
                    break;
            }
        });
}

function addEngineer() {
    inquirer.prompt([
        {
            message: "What is the engineer's name?",
            name: "name"
        },
        {
            message: "What is the engineer's employee ID?",
            name: "employeeID"
        },
        {
            message: "What is the engineer's email address?",
            name: "email"
        },
        {
            message: "What is the engineer's GitHub username?",
            name: "github"
        }
    ])
        .then(function(data) {
            const name = data.name
            const employeeID = finalTeamArray.length + 1
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, employeeID, email, github)
            finalTeamArray.push(teamMember)
            addTeamMember()
        });
};

function addIntern() {
    inquirer.prompt([
        {
            message: "What is the intern's name?",
            name: "name"
        },
        {
            message: "What is the intern's employee ID?",
            name: "employeeID"
        },
        {
            message: "What is the intern's email address?",
            name: "email"
        },
        {
            message: "What is the name of the intern's school?",
            name: "schoolName"
        }
    ])
        .then(function(data) {
            const name = data.name
            const employeeID = finalTeamArray.length + 1
            const email = data.email
            const schoolName = data.schoolName
            const teamMember = new Intern(name, employeeID, email, schoolName)
            finalTeamArray.push(teamMember)
            addTeamMember()
        });
})