// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdownFile = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    "Enter the title of the project:",
    "Enter the description:",
    "Enter the instructions for installation:",
    "Enter the instructions for usage:",
    "Enter the URL of the repository:",
    "Choose a license:",
    "Enter how others can contribute:",
    "Enter any examples for tests:",
    "Enter an email address:",
    "Enter GitHub username:"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([

        {
            type: "input",
            name: "titleProj",
            message: questions[0],
        },

        {
            type: "input",
            name: "descriptionProj",
            message: questions[1],
        },

        {
            type: "input",
            name: "installInstructions",
            message: questions[2],
        },

        {
            type: "input",
            name: "usageInstructions",
            message: questions[3],
        },

        {
            type: "input",
            name: "urlRepo",
            message: questions[4],
        },

        {
            type: "list",
            name: "licenseInfo",
            message: questions[5],
            // list below from GitHub
            choices: [
                'Apache License 2.0',
                'GNU General Public License v3.0',
                'MIT License',
                'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense',
                'None'
            ]
        },

        {
            type: "input",
            name: "contributeInfo",
            message: questions[6],
        },

        {
            type: "input",
            name: "testsExamples",
            message: questions[7],
        },

        {
            type: "input",
            name: "emailAddress",
            message: questions[8],
        },

        {
            type: "input",
            name: "usernameGH",
            message: questions[9],
        }

    ])
        .then()

}

// Function call to initialize app
init();
