const AbstractClass = require('./abstractClass');

class ConcreteClass2 extends AbstractClass {
    constructor() {
        super();

        console.log('ConcreteClass2 constructor.');
    }

    primitiveOperation1() {
        console.log('ConcreteClass2 primitiveOperation1.');
    }

    primitiveOperation2() {
        console.log('ConcreteClass2 primitiveOperation2.');
    }
}

module.exports = ConcreteClass2;