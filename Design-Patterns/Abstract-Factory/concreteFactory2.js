const AbstractFactory = require('./abstractFactory');
const ProductA2 = require('./productA2');
const ProductB2 = require('./productB2');

class ConcreteFactory2 extends AbstractFactory {
    constructor() {
        super();

        console.log('ConcreteFactory2 constructor.');
    }

    createProductA() {
        return new ProductA2();
    }

    createProductB() {
        return new ProductB2();
    }
}

module.exports = ConcreteFactory2;