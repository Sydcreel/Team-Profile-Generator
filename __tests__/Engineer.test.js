const Engineer = require('../lib/Engineer');

test('Acquires Employee properties', () => {
  const engineer = new Engineer('shinji', 123, 'shinji@email.com');
  expect(engineer.name).toBe('shinji');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
});

test('Creates Engineer object with Engineer specific properties', () => {
  const engineer = new Engineer('rei', 456, 'rei@email.com', 'reiHub');
  expect(engineer.github).toBe('reiHub');
});

test('Generates a GitHub link', () => {
  const engineer = new Engineer('guy', 789, 'guy@email.com', 'guyHub');
  expect(engineer.getGithub()).toBe('guyHub');
});

test('Overwrites Employee role (Engineer)', () => {
  const engineer = new Engineer('dude', 100, 'dude@email.com', 'dudeHub');
  expect(engineer.getRole()).toBe('Engineer');
});

test('Overwrites Employee icon based on role (Engineer)', () => {
  const engineer = new Engineer('Ed', 110, 'ed@email.com', 'edHub');
  expect(engineer.getIcon()).toBe(`fas fa-glasses`);
});

test('Overwrites Employee spec based on role (Engineer)', () => {
  const engineer = new Engineer('gendo', 120, 'gendo@email.com', 'gendoHub');
  expect(engineer.getSpec()).toBe(`<a href="https://github.com/gendoHub" target="_blank"><p class="p-4">GitHub: gendoHub</p></a>`);
});

test('Returns rendered HTML card for Engineer', () => {
  const engineer = new Engineer('ash', 130, 'ash@email.com', 'gHub');
  expect(engineer.render()).toBe(`
    <div class="card column is-one-quarter is-full-mobile m-3 p-0">
        <div class="card-header is-block has-background-info p-4">
            <h2 class="title is-3 has-text-white">ash</h2>
            <h3 class="has-text-white subtitle is-4"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
        </div>
        <div class="card-content has-background-light">
            <div class="has-background-white">
                <p class="p-4">ID: 130</p>
                <a href="mailto:ash@email.com"><p class="p-4">Email: ash@email.com</p></a>
                <a href="https://github.com/gHub" target="_blank"><p class="p-4">GitHub: gHub</p></a>
            </div>
        </div>
    </div>`);
});




