// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  "What is your project title?",
  "Please describe your project",
  "Please list table of contents (optional)",
  "How do you install this application?",
  "What is the applications usage?",
  "Did you use any outside sources you would like to credit?",
  "Any licenseing?",
  "What features does your application have?",
  "What tests were run during this applications creation?",
];

inquirer
  .prompt([
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
      type: "input",
      message: "Any licenseing?",
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
  ])
  .then((response) => {
    console.log(response);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const fs = require("fs");
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
