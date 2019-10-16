const Builder = require('./builder');
const Product = require('./product');

class ConcreteBuilder1 extends Builder {
    constructor(product) {
        super();

        this.product = product || new Product();

        console.log('ConcreteBuilder1 constructor.');
    }

    buildPartA() {
        this.product.add('partA1');
    }

    buildPartB() {
        this.product.add('partB1');
    }

    getResult() {
        return this.product;
    }
}

module.exports = ConcreteBuilder1;