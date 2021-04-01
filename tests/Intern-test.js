const Intern = require('../lib/Intern');

test('Acquires Employee properties', () => {
  const intern = new Intern('Shinji', 123, 'Shinji@email.com');
  expect(intern.name).toBe('Shinji');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
});

test('Creates Intern object with Intern specific properties', () => {
  const intern = new Intern('Rei', 456, 'Rei@email.com', 'University1');
  expect(intern.school).toEqual(expect.any(String));
});

test('Gets school name', () => {
  const intern = new Intern('Asuka', 789, 'Asuka@email.com', 'University2');
  expect(intern.getSchool()).toBe('School: University2');
});

test('Overwrites Employee role (Intern)', () => {
    const intern = new Intern('Toji', 100, 'Toji@email.com', 'University3');
    expect(intern.getRole()).toBe('Intern');
});

test('Overwrites Employee icon based on role (Intern)', () => {
  const intern = new Intern('Ed', 110, 'ed@email.com', 'University4');
  expect(intern.getIcon()).toBe(`fas fa-user-graduate`);
});

test('Overwrites Employee spec based on role (Intern)', () => {
  const intern = new Intern('Gendo', 120, 'Gendo@email.com', 'University5');
  expect(intern.getSpec()).toBe(`<p class="p-4">School: University5</p>`);
});

test("Returns rendered HTML card for Intern", () => {
  const intern = new Intern('Mei', 130, 'Mei@email.com', 'University6');
  expect(intern.render()).toBe(`
    <div class="card column is-one-quarter is-full-mobile m-3 p-0">
        <div class="card-header is-block has-background-info p-4">
            <h2 class="title is-3 has-text-white">Mei</h2>
            <h3 class="has-text-white subtitle is-4"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
        </div>
        <div class="card-content has-background-light">
            <div class="has-background-white">
                <p class="p-4">ID: 130</p>
                <a href="mailto:Mei@email.com"><p class="p-4">Email: Mei@email.com</p></a>
                <p class="p-4">School: University6</p>
            </div>
        </div>
    </div>`);
});