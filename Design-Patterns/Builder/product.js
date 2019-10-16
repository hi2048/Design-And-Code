class Product {
    constructor() {
        this.parts = new Array();

        console.log('Product constructor.');
    }

    add(part) {
        this.parts.push(part);
    }

    show() {
        console.log(...this.parts);
    }
}

module.exports = Product;