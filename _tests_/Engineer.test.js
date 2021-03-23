const Engineer = require("../lib/Engineer");

describe ("Engineer", ()=> {
describe ("Initialization", ()=> {
test( "Can initalize an intern object", ()=>{
    const e = new Engineer();
    expect (typeof e). toBe("object");
}); 

test ("Can set name attribute with constructor", ()=> {
  const name = "James";
  const e = new Engineer(name);
  expect(e.name).toBe(name); 

});

test ("can set attribute with constructor", ()=> {
    const id = 1;
    const e = new Engineer ("Manu", id);
    expect (e.id).toBe(id);
});

test("Can set email attribute with constructor", ()=> {
   const email = "ManuR@gmail.com";
   const e = new Engineer("Manu", 2, email);

   expect(e.email).toBe(email);
});
});
});

describe("getters", ()=> {
    test("Can get name via getName() method", ()=>{
     const name ="Manu";
     const e = new Engineer(name, 2, "ManuR@gmail.com");
     expect(e.getName()).toBe(name);
    });

    test("Can get id via getId() method", ()=> {
      const email = "ManuR@gmail.com";
      const e = new Engineer("Manu", 2, "ManuR@gmail.com");
      expect(e.getEmail()).toBe(email);
    });

    test("Can get role via getRole() method", ()=> {
        const e= new Engineer("Manu", 2, "ManuR@gmail.com");
        expect(e.getRole()).toBe("Engineer");
    });
});