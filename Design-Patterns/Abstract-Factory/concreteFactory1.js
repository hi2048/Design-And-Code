const AbstractFactory = require('./abstractFactory');
const ProductA1 = require('./productA1');
const ProductB1 = require('./productB1');

class ConcreteFactory1 extends AbstractFactory {
    constructor() {
        super();

        console.log('ConcreteFactory1 constructor.');
    }

    createProductA() {
        return new ProductA1();
    }

    createProductB() {
        return new ProductB1();
    }
}

module.exports = ConcreteFactory1;