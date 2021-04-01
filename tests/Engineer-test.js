const Engineer = require('../lib/Engineer');

test('Acquires Employee properties', () => {
  const engineer = new Engineer('Shinji', 123, 'Shinji@email.com');
  expect(engineer.name).toBe('Shinji');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
});

test('Creates Engineer object with Engineer specific properties', () => {
  const engineer = new Engineer('Rei', 456, 'Rei@email.com', 'ReiHub');
  expect(engineer.github).toBe('ReiHub');
});

test('Generates a GitHub link', () => {
  const engineer = new Engineer('Asuka', 789, 'Asuka@email.com', 'AsukaHub');
  expect(engineer.getGithub()).toBe('AsukaHub');
});

test('Overwrites Employee role (Engineer)', () => {
  const engineer = new Engineer('Toji', 100, 'Toji@email.com', 'TojiHub');
  expect(engineer.getRole()).toBe('Engineer');
});

test('Overwrites Employee icon based on role (Engineer)', () => {
  const engineer = new Engineer('ed', 110, 'ed@email.com', 'edHub');
  expect(engineer.getIcon()).toBe(`fas fa-glasses`);
});

test('Overwrites Employee spec based on role (Engineer)', () => {
  const engineer = new Engineer('Gendo', 120, 'Gendo@email.com', 'GendoHub');
  expect(engineer.getSpec()).toBe(`<a href="https://github.com/GendoHub" target="_blank"><p class="p-4">GitHub: GendoHub</p></a>`);
});

test("Returns rendered HTML card for Engineer", () => {
  const engineer = new Engineer('Mei', 130, 'Mei@email.com', 'gHub');
  expect(engineer.render()).toBe(`
    <div class="card column is-one-quarter is-full-mobile m-3 p-0">
        <div class="card-header is-block has-background-info p-4">
            <h2 class="title is-3 has-text-white">Mei</h2>
            <h3 class="has-text-white subtitle is-4"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
        </div>
        <div class="card-content has-background-light">
            <div class="has-background-white">
                <p class="p-4">ID: 130</p>
                <a href="mailto:Mei@email.com"><p class="p-4">Email: Mei@email.com</p></a>
                <a href="https://github.com/gHub" target="_blank"><p class="p-4">GitHub: gHub</p></a>
            </div>
        </div>
    </div>`);
});