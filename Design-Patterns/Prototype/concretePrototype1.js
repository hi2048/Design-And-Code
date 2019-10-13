const Prototype = require('./prototype');

class ConcretePrototype1 extends Prototype {
    constructor(id = "id") {
        super();

        this.id = id;

        console.log('ConcretePrototype1 constructor.');
    }

    clone() {
        return Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    }
}

module.exports = ConcretePrototype1;