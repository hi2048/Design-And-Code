class AbstractProductB {
    constructor() {
        if(new.target === AbstractProductB)
            throw new Error(`${AbstractProductB} cannot be initialized.`);

        console.log('AbstractProductB constructor.');
    }

    method() {
        throw new Error(`${this.method} should be overwrite.`);
    }
}

module.exports = AbstractProductB;