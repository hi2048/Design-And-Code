class Abstraction {
    constructor(implementor) {
        if(new.target === Abstraction)
            throw new Error(`${Abstraction} cannot be initialized.`);

        this.implementor = implementor;
    }

    setImplementor(implementor) {
        implementor && (this.implementor = implementor);
        return this;
    }

    operation() {
        throw new Error(`${this.operation} should be overwrite.`);
    }
}

module.exports = Abstraction;