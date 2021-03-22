const Employee = require("..lib/Employee");

describe("Employee", () => {
  describe ("Initialization", ()=> {
      text ("Can initalizie an employee object", ()=>{
          const e = new Employee();
          expect(typeof e). toBe("object");
      });
      test ("Can set name attribute with constructor", ()=>{
          
      })
  })


})

describe("getters", ()=> {
    test("can get name via getName() method", ()=> {
        
    })
})