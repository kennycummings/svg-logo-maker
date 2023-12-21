// const inquirer = require('inquirer');
// const { Triangle, Circle, Square } = require('./shapes.js');

// function getUserInput() {
//     const userInput = inquirer.prompt([
//         {
//             type: 'input',
//             name: 'text',
//             message: 'Enter up to three characters for the text:',
            
//         },
//         {
//             type: 'input',
//             name: 'textColor',
//             message: 'Enter a color for the text:',
//         },
//         {
//             type: 'list',
//             name: 'shape',
//             message: 'Choose a shape:',
//             choices: ['triangle', 'circle', 'square'],
//         },
//         {
//             type: 'input',
//             name: 'shapeColor',
//             message: 'Enter a color for the shape:',
//         },
//     ]).then((userInput) => {
//         let shape;
    
//         switch(userInput.shape) {
//             case 'triangle':
//                 new shape = new Triangle(userInput.text, userInput.textColor, userInput.shape, userInput.shapeColor);
//                 break;
//             case 'circle':
//                 new shape = new Circle(userInput.text, userInput.textColor, userInput.shape, userInput.shapeColor);
//                 break;
//             case 'square':
//                 new shape = new Square(userInput.text, userInput.textColor, userInput.shape, userInput.shapeColor);
//                 break;    
        
//             };

//             fs.writeFile('logo.svg', newShape.render(), (err) => {
//                 if (err) {
//                     console.log(err)
//                 }
//                 else {
//                     console.log("Generated successfully")
//                 }})

// })
// }
// getUserInput();
