const productClasses = require('./productClasses');

class ProductAccess {
    constructor() {
        console.log('ProductAccess constructor.');
    }

    create(product = 'ProductA1') {
        return new productClasses[product]();
    }
}

module.exports = ProductAccess;