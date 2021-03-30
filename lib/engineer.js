const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, employeeID, email, github){
        super (name, employeeID, email)
        this.github = github;
        this.title = "Engineer"
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return this.title;
    }
}

module.exports = Engineer