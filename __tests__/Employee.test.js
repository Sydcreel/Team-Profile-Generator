const Employee = require("../lib/Employee");

test("Creates an Employee object", () => {
  const employee = new Employee("shinji", 123, "shinji@email.com");
  expect(employee.name).toBe("shinji");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("Returns Employee name", () => {
  const employee = new Employee("rei", 456, "rei@email.com");
  expect(employee.getName()).toBe("rei");
});

test("Returns Employee ID", () => {
  const employee = new Employee("guy", 789, "guy@email.com");
  expect(employee.getId()).toBe("ID: 789");
});

test("Returns Employee email", () => {
  const employee = new Employee("dude", 100, "dude@email.com");
  expect(employee.getEmail()).toBe("dude@email.com");
});

test("Returns Employee Role (Employee)", () => {
  const employee = new Employee("Ed", 110, "ed@email.com");
  expect(employee.getRole()).toBe("Employee");
});

test("Returns Employee icon", () => {
  const employee = new Employee("gendo", 120, "gendo@email.com");
  expect(employee.getIcon()).toBe("");
});

test("Returns Employee special property string", () => {
  const employee = new Employee("ash", 130, "ash@email.com");
  expect(employee.getSpec()).toBe("");
});

test("Returns rendered HTML card for Employee", () => {
  const employee = new Employee("misty", 140, "misty@email.com");
  expect(employee.render()).toBe(`
    <div class="card column is-one-quarter is-full-mobile m-3 p-0">
        <div class="card-header is-block has-background-info p-4">
            <h2 class="title is-3 has-text-white">misty</h2>
            <h3 class="has-text-white subtitle is-4"><i class=" mr-2"></i>Employee</h3>
        </div>
        <div class="card-content has-background-light">
            <div class="has-background-white">
                <p class="p-4">ID: 140</p>
                <a href="mailto:misty@email.com"><p class="p-4">Email: misty@email.com</p></a>
                
            </div>
        </div>
    </div>`);
});
