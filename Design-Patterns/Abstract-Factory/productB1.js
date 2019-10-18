const AbstractProductB = require('./abstractProductB');

class ProductB1 extends AbstractProductB {
    constructor() {
        super();

        console.log('ProductB1 constructor.');
    }

    method() {
        console.log('ProductB1 method.');
    }
}

module.exports = ProductB1;