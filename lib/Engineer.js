const Employee = require("./lib/Employee")

class Engineer extends Employee{
    constructors(name, id, email, role, gitHub, ){
        super (name, id, email, role)
        this.gitHub= gitHub;
    }

    getGitHub (){
        return this.gitHub; 
    }
    }

   module.exports = Engineer; 