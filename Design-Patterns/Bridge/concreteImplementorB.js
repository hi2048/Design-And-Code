const Implementor = require('./implementor');

class ConcreteImplementorB extends Implementor {
    constructor() {
        super();
    }

    operation() {
        console.log('ConcreteImplementorB operation.');
    }
}

module.exports = ConcreteImplementorB;