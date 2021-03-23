const Employee = require("./lib/Employee");

describe("Employee", () => {
  describe ("Initialization", ()=> {
      text ("Can initalize an employee object", ()=>{
          const e = new Employee();
          expect(typeof e). toBe("object");
      });
      test ("Can set name attribute with constructor", ()=>{
          const name ="Clark";
          const e = new Employee (name); 

          expect(e.name). toBe(name);
      });

      test("can set attribute with constructor", ()=> {
       const id = 77;
       const e = new Employee("Nick", id); 

       expect (e.id).toBe(id); 

      }); 

      test("Can set email attribute with constructor", ()=> {
       const email= "dobsonemily@gmail.com";
       const e = new Employee("Nick", 77, email);

       expect (e.email).toBe(email);

      });
  }); 
}); 

describe("getters", ()=> {
    test("Can get name via getName() method", ()=> {
        const name ="Nick";
        const e = new Employee(name, 77, "dobsonemily@gmail.com");

        expect(e. getName()).toBe(name);
    });
    test("can get id via getId() method", ()=> {
     const email = "dobsonemily@gmail.com";
     const e = new Employee ("Nick", 77, email); 

     expect(e.getEmail()).toBe(email);
    });
    test("Can get role via getRole() method", ()=> {
        const e= new Employee("Nick", 77, "dobsonemily@gmail.com");

        expect(e.getRole()).toBe("Employee");
    });

});