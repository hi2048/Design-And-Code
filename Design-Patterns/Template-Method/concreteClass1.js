const AbstractClass = require('./abstractClass');

class ConcreteClass1 extends AbstractClass {
    constructor() {
        super();

        console.log('ConcreteClass1 constructor.');
    }

    primitiveOperation1() {
        console.log('ConcreteClass1 primitiveOperation1.');
    }

    primitiveOperation2() {
        console.log('ConcreteClass1 primitiveOperation2.');
    }
}

module.exports = ConcreteClass1;