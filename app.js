// const employees = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// create empty array to hold all employees
// array of employee starter questions - will hold name id and role - whats your name, whats your id and whats your role
// if this person is intern, ask these questions, manager, engineer etc

// start with employee*

const employees = []
const newMemberQuestion = [
    {
        type: "list",
        message: "Select a type of employee to add.",
        choices: ["Manager", "Engineer", "Intern", "Finish and create team page"],
        name: "newMember"
    }
];

const employeeQuestions = [
    {
        type: "input",
        message: "What is the employee's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the employee's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the employee's email address?",
        name: "email"
    },
];


const managerQuestion = [
    {
        type: "input",
        message: "What is manager's office number?",
        name: "officeNumber"
    }
];

const engineerQuestion = [
    {
        type: "input",
        message: "What is the engineer's GitHub URL?",
        name: "github"
    }
];

const internQuestion = [
    {
        type: "input",
        message: "What school does the intern attend?",
        name: "school"
    }
];


const newMember = () => {
    // Asks question for type of employee
    inquirer.prompt(newMemberQuestion).then((answer) => {
        // Runs a specific function based on answer to previous question
        if(answer.newMember === "Manager"){
            addManager();
        } else if (answer.newMember === "Engineer"){
            addEngineer();
        } else if (answer.newMember === "Intern"){
            addIntern();
        } else {
            // Ends the loop and writes to an HTML page
            console.log(employees);
            fs.writeFile(outputPath, render(employees), (err) => {
                if (err) throw err;
                console.log('Team page created!');
            });
        }
    });
}

const addManager = () => {
    // Ask general employee questions first
    inquirer.prompt(employeeQuestions).then((employeeAnswers) => {
        // Ask manager specifc question
        inquirer.prompt(managerQuestion).then((managerAnswer) => {
            const manager = new Manager(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, managerAnswer.officeNumber);
            employees.push(manager);
            newMember();
        });
    });
}

const addEngineer = () => {
    // Ask general employee questions first
    inquirer.prompt(employeeQuestions).then((employeeAnswers) => {
        // Ask engineer specifc question
        inquirer.prompt(engineerQuestion).then((engineerAnswer) => {
            const engineer = new Engineer(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, engineerAnswer.github);
            employees.push(engineer);
            newMember();
        });
    });
}

const addIntern = () => {
    // Ask general employee questions first
    inquirer.prompt(employeeQuestions).then((employeeAnswers) => {
        // Ask intern specifc question
        inquirer.prompt(internQuestion).then((internAnswer) => {
            const intern = new Intern(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, internAnswer.school);
            employees.push(intern);
            newMember();
        });
    });
}


// Starts the app
newMember();


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
