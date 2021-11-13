// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "GNU GPLv2") {
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  } else if (license === "None") {
    return "This application is not covered under any license agreement.";
  } else if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else {
    return "Something went wrong-try again!";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "GNU GPLv2") {
    return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
  } else if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // return `This application is covered under the ${license} license.`
  if(license === "MIT") {
    return "This application is licensed under the MIT License. A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
  } else if (license === "GNU GPLv2") {
    return "This application is licensed under the GNU General Public License v2.0. The GNU GPL is the most widely used free software license and has a strong copyleft requirement. When distributing derived works, the source code of the work must be made available under the same license. There are multiple variants of the GNU GPL, each with different requirements.";
  } else if (license === "Apache 2.0") {
    return "This application is licensed under the Apache License 2.0. A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
  } else {
    return "This application is not covered under any license agreement."
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown({
  title,
  description,
  installation,
  usage,
  license,
  screenshot,
  credits,
  username,
  email,
}) {
  return `
  # ${title}
  
  ## Description
  ${description}

  ## License Badge
  ${renderLicenseBadge(license)}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Screenshot(s)](#screenshot)
  - [Credits](#credits)
  - [Questions](#questions)
  
  ## Installation
  ${installation}

  ## Usage
  ${usage}
  
  ## License
  ${renderLicenseSection(license)}

  ${renderLicenseLink(license)}
  
  ## Screenshot(s)
  ![alt text](./assets/${screenshot})
   

  ## Credits
  ${credits}

  ## Questions
  www.github.com/${username}

  mailto:${email}

  - - - -
  `;
};
//export the generateMarkdown 
module.exports = generateMarkdown;
