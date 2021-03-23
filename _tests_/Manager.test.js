const Manager = require("../lib/Manager.js")

describe ("Manager", ()=> {
    describe ("Initialization", ()=> {
    test( "Can initalize an intern object", ()=>{
        const e = new Manager();
        expect (typeof e). toBe("object");
    }); 
    
    test ("Can set name attribute with constructor", ()=> {
      const name = "Emily";
      const e = new Manager(name);
      expect(e.name).toBe(name); 
    
    });
    
    test ("can set attribute with constructor", ()=> {
        const id = 3;
        const e = new Manager ("Emily", id);
        expect (e.id).toBe(id);
    });
    
    test("Can set email attribute with constructor", ()=> {
       const email = "Emily.Dobson@gmail.com";
       const e = new Manager("Emily", 3, email);
    
       expect(e.email).toBe(email);
    });
    
    test("Can set Office Number attribute with constructor", ()=> {
        const officeNum = 123;
        const e = new Manager("Emily", 3, "Emily.Dobson@gmail.com", officeNum); 
        expect(e.officeNum).toBe(officeNum);
    });
    });
    });
    
    describe("getters", ()=> {
        test("Can get name via getName() method", ()=>{
         const name ="Emily";
         const e = new Manager(name, 3, "Emily.Dobson@gmail.com");
         expect(e.getName()).toBe(name);
        });
    
        test("Can get id via getId() method", ()=> {
          const email = "Emily.Dobson@gmail.com";
          const e = new Manager("Emily", 3, "Emily.Dobson@gmail.com");
          expect(e.getEmail()).toBe(email);
        });
    
        test("Can get office number via get officeNum() method", () => {
            const officeNum = 123;
            const e = new Manager ("Emily", 3, "Emily.Dobson@gmail.com", officeNum);
            expect(e.getOfficeNum()).toBe(officeNum); 
            
        })
    });
