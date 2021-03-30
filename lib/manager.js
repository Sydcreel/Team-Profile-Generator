const Employee = require("./employee")


class Manager extends Employee {
    constructor (name, employeeID, email, officeNumber){
        super (name, employeeID, email)
        this.officeNumber = officeNumber
        this.title = "Manager"
    }

    getRole(){
        return this.title;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

}

module.exports = Manager