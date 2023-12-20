const inquirer = require('inquirer');

async function getUserInput() {
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the text:',
        },
    ]);

    return userInput;
}

module.exports = { getUserInput };
