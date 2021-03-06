const Engineer = require("../lib/Engineer");

test("Can set name account via super", () => {
  const testValue = "Foo";
  const e = new Engineer(testValue);
  expect(e.name).toBe(testValue);
});

test("Can set name account via super", () => {
  const testValue = "Foo";
  const e = new Engineer(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
