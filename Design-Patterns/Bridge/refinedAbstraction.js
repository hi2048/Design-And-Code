const Abstraction = require('./abstraction');

class RefinedAbstraction extends Abstraction {
    constructor(implementor = {}) {
        super(implementor);
    }

    operation() {
        console.log('RefinedAbstraction operation.');

        this.implementor.operation && this.implementor.operation();
        return this;
    }
}

module.exports = RefinedAbstraction;