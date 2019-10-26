const Implementor = require('./implementor');

class ConcreteImplementorA extends Implementor {
    constructor() {
        super();
    }

    operation() {
        console.log('ConcreteImplementorA operation.');
    }
}

module.exports = ConcreteImplementorA;