const Prototype = require('./prototype');

class ConcretePrototype2 extends Prototype {
    constructor(name = "name") {
        super();

        this.name = name;
        console.log('ConcretePrototype2 constructor.');
    }

    clone(initObj = {}) {
        return Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(Object.assign({}, this, initObj)));
    }
}

module.exports = ConcretePrototype2;