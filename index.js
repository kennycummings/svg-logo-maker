const inquirer = require('inquirer');

async function getUserInput() {
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the text:',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['triangle', 'circle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color for the shape:',
        },
    ]);

    return userInput;
}

module.exports = { getUserInput };
