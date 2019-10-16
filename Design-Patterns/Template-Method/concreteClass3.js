const AbstractClass = require('./abstractClass');

class ConcreteClass3 extends AbstractClass {
    constructor() {
        super();

        console.log('ConcreteClass3 constructor.');
    }

    primitiveOperation2() {
        console.log('ConcreteClass3 primitiveOperation2.');
    }
}

module.exports = ConcreteClass3;