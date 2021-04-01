const Manager = require('../lib/Manager');

test('Acquires Employee properties', () => {
    const manager = new Manager('shinji', 123, 'shinji@email.com');
    expect(manager.name).toBe('shinji');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
  });

  test('Creates Manager object with Manager specific properties', () => {
    const manager = new Manager('rei', 456, 'rei@email.com', 1);
    expect(manager.officeNumber).toEqual(expect.any(Number));
  });

  test('Overwrites Employee role (Manager)', () => {
    const manager = new Manager('guy', 789, 'dude@email.com', 2);
    expect(manager.getRole()).toBe('Manager');
  });

  test('Overwrites Employee icon based on role (Manager)', () => {
    const manager = new Manager('dude', 100, 'dude@email.com', 3);
    expect(manager.getIcon()).toBe(`fas fa-mug-hot`);
  });
  
  test('Overwrites Employee spec based on role (Manager)', () => {
    const manager = new Manager('Ed', 110, 'ed@email.com', 4);
    expect(manager.getSpec()).toBe(`<p class="p-4">Office number: 4</p>`);
  });
  
  test('Returns rendered HTML card for Manager', () => {
    const manager = new Manager('gendo', 120, 'gendo@email.com', 5);
    expect(manager.render()).toBe(`
    <div class="card column is-one-quarter is-full-mobile m-3 p-0">
        <div class="card-header is-block has-background-info p-4">
            <h2 class="title is-3 has-text-white">gendo</h2>
            <h3 class="has-text-white subtitle is-4"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
        </div>
        <div class="card-content has-background-light">
            <div class="has-background-white">
                <p class="p-4">ID: 120</p>
                <a href="mailto:gendo@email.com"><p class="p-4">Email: gendo@email.com</p></a>
                <p class="p-4">Office number: 5</p>
            </div>
        </div>
    </div>`);
  });