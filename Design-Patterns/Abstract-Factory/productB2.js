const AbstractProductB = require('./abstractProductB');

class ProductB2 extends AbstractProductB {
    constructor() {
        super();

        console.log('ProductB2 constructor.');
    }

    method() {
        console.log('ProductB2 method.');
    }
}

module.exports = ProductB2;