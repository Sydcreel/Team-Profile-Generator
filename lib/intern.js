const Employee = require("./employee")

class Intern extends Employee {
    constructor(name, employeeID, email, school){
        super(name, employeeID, email)
        this.schoolName = schoolName;
        this.title = "Intern";
    }

    getSchool(){
        return this.schoolName;
    }

    getRole(){
        return this.title;
    }
}

module.exports = Intern