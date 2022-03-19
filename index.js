const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generate = require('./utils/generateMarkdown');

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "badge",
        message: "Please input any badges you'd like to include"
    },
    {
        type: "input",
        name: "description",
        message: "What is your project's description?"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions"
    },
    {
        type: "input",
        name: "start",
        message: "What would you enter in the command line for the program to start?"
    },
    {
        type: "input",
        name: "licence",
        message: "Enter project license here"
    },
    {
        type: "input",
        name: "creator",
        message: "Who made this program?"
    },
    {
        type: "input",
        name: "test",
        message: "Enter test badge here"
    },
    {
        type: "input",
        name: "username",
        message: "Provide your github user name"
    },
    {
        type: "input",
        name: "repo",
        message: "Please enter repo link"
    },
];

inquirer
    .prompt(questions)
    .then(function(data){
        const queryUrl = `https://api.github.com/users/${data.username}`;

        axios.get(queryUrl).then(function(res) {
            
            const githubInfo = {
                githubImage: res.data.avatar_url,
                email: res.data.email,
                profile: res.data.html_url,
                name: res.data.name
            };
            
          fs.writeFile("README.md", generate(data, githubInfo), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("You have successfully created a new README for your repo!");
          });
        });

});

function init() {

}

init();