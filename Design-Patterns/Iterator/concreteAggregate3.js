const Aggregate = require('./aggregate');
const ConcreteIterator3 = require('./concreteIterator3');

class ConcreteAggregate3 extends Aggregate {
    constructor() {
        super();
    }

    createIterator() {
        return new ConcreteIterator3(this);
    }
}

module.exports = ConcreteAggregate3;