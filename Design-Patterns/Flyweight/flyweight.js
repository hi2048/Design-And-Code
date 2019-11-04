class Flyweight {
    constructor() {
        if(new.target === Flyweight)
            throw new Error(`${Flyweight} cannot be initialized.`);
    }

    operation(extrinsicState) {
        throw new Error(`${this.operation} should be overwrite.`);
    }
}

module.exports = Flyweight;