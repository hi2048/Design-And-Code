class AbstractFactory {
    constructor() {
        if(new.target === AbstractFactory)
            throw new Error(`${AbstractFactory} cannot be initialized.`);

        console.log('AbstractFactory constructor.');
    };

    createProductA() {
        throw new Error(`${this.createProductA} should be overwrite.`);
    };

    createProductB() {
        throw new Error(`${this.createProductB} should be overwrite.`);
    };
}

module.exports = AbstractFactory;