// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description'
    },
    {
        type: 'editor',
        message: 'What are the required steps for installation of the application?',
        name: 'installation'
    },
    {
        type: 'editor',
        message: 'What are the steps to successfully use the app?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Which license badge would you like to include?',
        choices: [
            'MIT',
            'GNU GPLv2',
            'Apache 2.0',
            'None',
                ],
        name: 'license', 
    },
    {
        type: 'input',
        message: 'To include a screenshot please type the filename and extension and ensure the filename is in a subfolder of index.js named assets.',
        name: 'screenshot'
    },
    {
        type: 'input',
        message: 'Please enter any credits you would like to include (e.g. http://screencastify.com/welcome, etc.).',
        name: 'credits'
    },
    {
        type: 'input',
        message: 'What is your GitHub username to include as contact information link?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address to include as contact information?',
        name: 'email'
    }
];

// TODO: Create a function to write README file
const writeToFile = () => {
    var fileName = 'README.md'
    inquirer
    .prompt(questions)
    .then((answer) => {
        fs.writeFile(fileName, generateMarkdown(answer), function(err) {
            console.log(err);
        })
    }
)};

// TODO: Create a function to initialize app
function init() {

};

// Function call to initialize app
init();
writeToFile();