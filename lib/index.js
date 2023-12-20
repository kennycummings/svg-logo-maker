const shapes = require('./shapes.js');

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

    if (shape instanceof Shape) {
        console.log(`Rendering ${userInput.shape} with color ${userInput.shapeColor}:`);
        console.log(shape.render());
    } else {
        console.error('Invalid shape instance');
    }
}

main();
