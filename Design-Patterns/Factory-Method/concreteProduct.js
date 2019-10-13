const Product = require('./product');

class ConcreteProduct extends Product {
    constructor() {
        super();

        console.log('ConcreteProduct constructor');
    }

    method() {
        console.log('ConcreteProduct method');
    }
}

module.exports = ConcreteProduct;