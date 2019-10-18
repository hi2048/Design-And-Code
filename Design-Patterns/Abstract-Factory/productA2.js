const AbstractProductA = require('./abstractProductA');

class ProductA2 extends AbstractProductA {
    constructor() {
        super();

        console.log('ProductA2 constructor.');
    }

    method() {
        console.log('ProductA2 method.');
    }
}

module.exports = ProductA2;