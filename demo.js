let Employee = {
  getName() {},
  role: "employee",
};

let Manager = {
  getOffice() {},
  role: "manager",
};

Manager = {
  ...Employee,
  ...Manager,
};

console.log(Manager);
