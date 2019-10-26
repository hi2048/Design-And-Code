class Implementor {
    constructor() {
        if(new.target === Implementor) {
            throw new Error(`${Implementor} cannot be initialized.`);
        }
    }

    operation() {
        throw new Error(`${this.operation} should be overwrite.`);
    }
}

module.exports = Implementor;