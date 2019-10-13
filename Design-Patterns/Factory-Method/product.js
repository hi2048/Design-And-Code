class Product {
    constructor() {
        if(new.target === Product)
            throw new Error(`${Product} cannot be initialized.`);
        
        console.log('Product constructor.');
    }

    method() {
        return;
    }
}

module.exports = Product;