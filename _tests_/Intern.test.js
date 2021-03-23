const Intern= require("./lib/Intern.js");

describe ("Intern", ()=> {
    describe ("Initialization", ()=> {
    test( "Can initalize an intern object", ()=>{
        const e = new Intern();
        expect (typeof e). toBe("object");
    }); 
    
    test ("Can set name attribute with constructor", ()=> {
      const name = "Erin";
      const e = new Intern(name);
      expect(e.name).toBe(name); 
    
    });
    
    test ("can set attribute with constructor", ()=> {
        const id = 4;
        const e = new Intern ("Erin", id);
        expect (e.id).toBe(id);
    });
    
    test("Can set email attribute with constructor", ()=> {
       const email = "Erin.Moore@gmail.com";
       const e = new Intern("Erin", 4, email);
    
       expect(e.email).toBe(email);
    });
    
    test("Can set school attribute with constructor", ()=> {
        const school = "U of A";
        const e = new Intern ("Erin", 2, "Erin.Moore@gmail.com"); 
        expect(e.school).toBe(school);
    });
    });
    });
    
    describe("getters", ()=> {
        test("Can get name via getName() method", ()=>{
         const name ="Erin";
         const e = new Intern(name, 4, "Erin.Moore@gmail.com");
         expect(e.getName()).toBe(name);
        });
    
        test("Can get id via getId() method", ()=> {
          const email = "Erin.Moore@gmail.com";
          const e = new Intern("Erin", 4, "Erin.Moore@gmail.com");
          expect(e.getEmail()).toBe(email);
        });
    
        test("Can get role via getRole() method", ()=> {
            const e= new Intern("Erin", 4, "Erin.Moore@gmail.com");
            expect(e.getRole()).toBe("Intern");
        });
        test("Can get school via getSchool() method", () => {
            const e = new Intern ("Erin", 4, "Erin.Moore@gmail.com", "Intern");
            expect(e.getSchool()).toBe ("school"); 
    
        })
    });