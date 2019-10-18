const AbstractProductA = require('./abstractProductA');

class ProductA1 extends AbstractProductA {
    constructor() {
        super();

        console.log('ProductA1 constructor.');
    }

    method() {
        console.log('ProductA1 method.');
    }
}

module.exports = ProductA1;