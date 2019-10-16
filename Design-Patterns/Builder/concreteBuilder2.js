const Builder = require('./builder');
const Product = require('./product');

class ConcreteBuilder2 extends Builder {
    constructor(product) {
        super();

        this.product = product || new Product();
        console.log('ConcreteBuilder2 constructor.');
    }

    buildPartA() {
        this.product.add('partA2');
    }

    buildPartB() {
        this.product.add('partB2');
    }

    getResult() {
        return this.product;
    }
}

module.exports = ConcreteBuilder2;