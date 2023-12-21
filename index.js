const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes.js');

function getUserInput() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the text:',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color for the text:',
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
    ]).then((userInput) => {
        let shape;

        switch (userInput.shape) {
            case 'triangle':
                shape = new Triangle(userInput.text, userInput.textColor, userInput.shapeColor);
                break;
            case 'circle':
                shape = new Circle(userInput.text, userInput.textColor, userInput.shapeColor);
                break;
            case 'square':
                shape = new Square(userInput.text, userInput.textColor, userInput.shapeColor);
                break;
        }

        fs.writeFile('logo.svg', shape.render(), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Generated successfully");
            }
        });
    });
}

getUserInput();
