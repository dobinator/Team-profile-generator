const Employee = require("./lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    test("Can initalize an employee object", () => {
      const e = new Employee();
      expect(typeof e).toBe("object");
    });

    test("Can set name attribute with constructor", () => {
      const name = "James";
      const e = new Employee(name);
      expect(e.name).toBe(name);
    });

    test("can set attribute with constructor", () => {
      const id = 1;
      const e = new Employee("James", id);
      expect(e.id).toBe(id);
    });

    test("Can set email attribute with constructor", () => {
      const email = "test@test.com";
      const e = new Employee("James", 1, email);
      expect(e.email).toBe(email);
    });
  });
});

describe("getters", () => {
  test("Can get name via getName() method", () => {
    const name = "James";
    const e = new Employee(name, 1, "test@test.com");

    expect(e.getName()).toBe(name);
  });

  test("Can get id via getId() method", () => {
    const email = "test@test.com";
    const e = new Employee("James", 1, email);
    expect(e.getEmail()).toBe(email);
  });

  test("Can get role via getRole() method", () => {
    const e = new Employee("James", 1, "test@test.com");
    expect(e.getRole()).toBe("Employee");
  });
});
