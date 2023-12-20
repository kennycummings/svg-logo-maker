const { Triangle, Circle, Square } = require('./shapes');

// Triangle test
test('Triangle renders correctly', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
});

// Circle test
test('Circle renders correctly', () => {
    const shape = new Circle();
    shape.setColor('red');
    expect(shape.render()).toEqual('<circle cx="150" cy="150" r="75" fill="red" />');
});

// Square test
test('Square renders correctly', () => {
    const shape = new Square();
    shape.setColor('green');
    expect(shape.render()).toEqual('<rect x="56" y="56" width="188" height="188" fill="green" />');
});
