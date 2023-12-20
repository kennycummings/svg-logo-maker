import { Triangle, Circle, Square, Shape } from './shapes.js';

import inquirer from 'inquirer';

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

async function main() {
    const userInput = await getUserInput();

    let shape;

    switch (userInput.shape) {
        case 'triangle':
            shape = new Triangle();
            break;
        case 'circle':
            shape = new Circle();
            break;
        case 'square':
            shape = new Square();
            break;
        default:
            console.error('Invalid shape selection');
            return;
    }

    shape.setColor(userInput.shapeColor);

    console.log(`Rendering ${userInput.shape} with color ${userInput.shapeColor}:`);
    console.log(shape.render());
}

main();
