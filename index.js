// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// require file system to read files associated with the app
const fs = require("fs");
// access and interact with file system (fs)
const path = require("path");
// links to markdown js file
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  "What is your project title?",
  "Provide a short description explaining the what, why, and how of your project.",
  "List table of contents",
  "How do you install this application?",
  "What is the applications usage?",
  "Did you use any outside sources you would like to credit?",
  "Any licenceing?",
  "What features does your application have?",
  "What tests were run during this applications creation?",
  "Want to include your email?",
];

inquirer
  .prompt([
    {
      name: "github",
      type: "input",
      message: "What is your github name?",
    },
    {
      name: "projectName",
      type: "input",
      message: "What is your project title?",
    },
    {
      name: "Description",
      type: "input",
      message: "Please describe your project",
    },
    {
      name: "tableOfContents",
      type: "input",
      message: "Please list table of contents (optional)",
    },
    {
      name: "Installation",
      type: "input",
      message: "How do you install this application?",
    },
    {
      name: "appUsage",
      type: "input",
      message: "What is the applications usage?",
    },
    {
      name: "credits",
      type: "input",
      message: "Did you use any outside sources you would like to credit?",
    },
    {
      name: "licensing",
      type: "list",
      message: "Any licenseing?",
      choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3"],
    },
    {
      name: "features",
      type: "input",
      message: "What features does your application have?",
    },
    {
      name: "tests",
      type: "input",
      message: "What tests were run during this applications creation?",
    },
    {
      name: "email",
      type: "input",
      message: "Want to include your email?",
    },
  ])
  .then((response) => {
    console.log(response);

    //const data = generateMarkdown(response); //large string

    // method built in node that writes to a file, contains 2 arguments one saying where to write the file and the other to show what data will be displayed in that file.
    fs.writeFileSync(
      path.join(__dirname, "README.md"),
      generateMarkdown(response)
    );
  });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
