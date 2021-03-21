const Employee = require("./Employee");

class Intern extends Employee{

    constructors(name, id, email, role, school){
       super (name, id, email, role)
        this.school= school;

    }
    
    getSchool (){
        return this.school; 
    }

    }

    module.exports = Intern;