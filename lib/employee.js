class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = 'Employee';
      this.icon = '';
      this.spec = '';
    }
  
    getName() {
      return this.name;
    }
  
    getId() {
      return `ID: ${this.id}`;
    }
  
    getEmail() {
      return `${this.email}`;
    }
  
    getRole() {
      return this.role;
    }
  
    getIcon() {
      return this.icon;
    }
  
    getSpec() {
      return this.spec;
    }
  

    render() {
      return `
      <div class="card column is-one-quarter is-full-mobile m-3 p-0">
          <div class="card-header is-block has-background-info p-4">
              <h2 class="title is-3 has-text-white">${this.getName()}</h2>
              <h3 class="has-text-white subtitle is-4"><i class="${this.getIcon()} mr-2"></i>${this.getRole()}</h3>
          </div>
          <div class="card-content has-background-light">
              <div class="has-background-white">
                  <p class="p-4">${this.getId()}</p>
                  <a href="mailto:${this.getEmail()}"><p class="p-4">Email: ${this.getEmail()}</p></a>
                  ${this.getSpec()}
              </div>
          </div>
      </div>`;
    }
  }
  
  module.exports = Employee;