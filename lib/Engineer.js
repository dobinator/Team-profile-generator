class Engineer {

    constructors(name, id, email){
        this.name = name;
        this.id = id;
        this.email= email;
        this.gitHub= gitHub;

    }
    
    getName() {
     return this.name;
    
    }
    
    getId() {
        return this.id;
    }
    
    getEmail(){
        return this.email;
    }
    
    getRole() {
        return "Engineer";
    }
    getSchool (){
        return this.gitHub; 
    }


    }