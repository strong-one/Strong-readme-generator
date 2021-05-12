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
  return `# ${data.title}
![GitHub License](https://img.shields.io/badge/license-${data.licensing}-blue.svg);


## Description

${data.Description}

## Table of Contents

* Installation
* Usage
* Credits
* License
* Features
* Tests

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

Want to connect?

Email: ${data.email}
Github: [${data.github}](https://github.com/${data.github}${data.github}/)

`;
  //  });
}

module.exports = generateMarkdown;
