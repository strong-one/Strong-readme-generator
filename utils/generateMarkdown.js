// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

const { default: axios } = require("axios");

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}
//![GitHub Avatar](${res.avatar_url});

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //axios.get(`https://api.github.com/users/${data.github}`).then((res) => {
  return `# Professional Readme Generator
![GitHub License](https://img.shields.io/badge/license-${data.licensing}-blue.svg)


## Description

${data.Description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#Credits)
* [License](#licensing)
* [Features](#features)
* [Tests](#tests)
* [Let's Connect](#letsconnect)
${data.tableOfContents}

## Installation Instructions

\`\`\`
${data.Installation}
\`\`\`

## Usage

${data.appUsage}

## Credits 

${data.credits}

## 

## Licensing 

${data.licensing}

## Features 

${data.features}

## Tests

${data.tests}

## Lets Connect


Email: ${data.email}
Github: [${data.github}](https://github.com/${data.github}${data.github}/)

`;
}

// is a variable that represents the current file, and exports is an object that will be exposed as a file. So, whatever you assign to module.exports will be exposed as a file.
module.exports = generateMarkdown;
