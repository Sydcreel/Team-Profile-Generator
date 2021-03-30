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
};

function createTeam() {
    const htmlArray = []
    const htmlStart = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${finalTeamArray[0]}</title>
        <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
        <style>
         ${style}
        </style>
    </head>
    <body>
        <div class="banner-bar">
            <h1>${finalTeamArray[0]}</h1>
        </div>
        <div class="card-container">
        `
        htmlArray.push(htmlStart);
    
        for (let i = 1; i < finalTeamArray.length; i++) {
            let object = `
            <div class="member-card">
                <div class="card-top">
                    <h2>${finalTeamArray[i].name}</h2>
                    <h2>${finalTeamArray[i].title}</h2>
                </div>
                <div class="card-bottom">
                    <p>Employee ID: ${finalTeamArray[i].id}</p>
                    <p>Email: <a href="mailto:${finalTeamArray[i].email}">${finalTeamArray[i].email}</a>></p>
            `
            if (finalTeamArray[i].officeNumber) {
                object += `
                <p>${finalTeamArray[i].officeNumber}</p>
                `
            }
            if (finalTeamArray[i].github) {
                object += `
                <p>GitHub: <a href="https://github.com/${finalTeamArray[i].github}">${finalTeamArray[i].github}</a></p>
                `
            }
            if (finalTeamArray[i].schoolName) {
                object += `
                <p>School: ${finalTeamArray[i].schoolName}</p>
                `
            }
            object += `
            </div>
            </div>
            `
            htmlArray.push(object)
        }
    
        const htmlEnd = `
        </div>
        </body>
        </html>
        `
        htmlArray.push(htmlEnd);
    
        fs.writeFile(`./generateHTML/${finalTeamArray[0]}.html`, htmlArray.join(""), function (err) {
            
        })
    }  
startingPrompt()