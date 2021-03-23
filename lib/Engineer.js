const Employee = require("./Employee")

class Engineer extends Employee{
    constructor(name, id, gitHub){
        super (name, id, email)
        this.gitHub= gitHub;
    }

    getGitHub (){
        return this.gitHub; 
    }
    }

   module.exports = Engineer; 