class AbstractProductA {
    constructor() {
        if(new.target === AbstractProductA)
            throw new Error(`${AbstractProductA} cannot be initialized.`);

        console.log('AbstractProductA constructor.');
    }

    method() {
        throw new Error(`${this.method} should be overwrite.`);
    }
}

module.exports = AbstractProductA;