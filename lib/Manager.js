const Employee = require("./Employee")


const Employee = require("./lib/Employee");

class Manager extends Employee {
    constructors(name, id, email, officeNum){
       super (name, id, email, role) 
         this.officeNum = officeNum

    }

    getOfficeNum (){
        return this.officeNum 
    }

    }
    
    module.exports = Manager