// TODO: Write code to define and export the Employee class

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;

/**
 * const emp1 = new Employee("Ben", 1, "b@b.com")
 * const emp2 = new Employee("Jenna", 2, j@j.com")
 *
 * function Employee(name, id, email){
 *  this.name= name;
 *  this.id= id;
 *  this.email= email;
 * }
 *
 * Employee.prototype.getName = function(){ return this.name }
 * Employee.prototype.getId = function(){ return this.id }
 * Employee.prototype.getEmail = function(){ return this.email }
 * Employee.prototype.getRole = function(){ return "Employee" }
 *
 * console.log(emp1) === Employee:{
 *  name: "Ben",
 *  id: 1,
 *  email: "b@b.com"
 * }
 * 
 * console.log(emp1.getName()): "Ben"
 */
