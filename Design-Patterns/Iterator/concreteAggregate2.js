const Aggregate = require('./aggregate');
const ConcreteIterator2 = require('./concreteIterator2');

class ConcreteAggregate2 extends Aggregate {
    constructor() {
        super();
    }

    createIterator() {
        return new ConcreteIterator2(this);
    }
}

module.exports = ConcreteAggregate2;