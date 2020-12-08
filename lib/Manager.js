// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;

/**
 * const Employee = require('Employee')
 * 
 * const emp1 = {
 *    ...new Employee("Ben", 1, "b@b.com")
 *    ...new Manager(123)
 * } 
 *
 * function Manager(officeNumber){
 *  this.officeNumber = officeNumber;
 * } 
 * 
 * Manager.prototype.getOfficeNumber = function(){ return this.officeNumber }
 * Manager.prototype.getRole = function(){ return "Manager" }
 *
 * console.log(emp1) === Manager:{
 *  name: "Ben",
 *  id: 1,
 *  email: "b@b.com",
 *  officeNumber: 123
 * }
 *
 * console.log(emp1.getName()): "Ben"
 */
