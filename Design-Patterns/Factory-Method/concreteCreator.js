const Creator = require('./creator');
const ConcreteProduct = require('./concreteProduct');

class ConcreteCreator extends Creator {
    constructor(product) {
        super();

        this.product = product;

        console.log('ConcreteCreator constructor.');
    }

    factoryMethod() {
        return this.product || new ConcreteProduct();
    }
}

module.exports = ConcreteCreator;