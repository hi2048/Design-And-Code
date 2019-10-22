const Aggregate = require('./aggregate');
const ConcreteIterator = require('./concreteIterator1');

class ConcreteAggregate extends Aggregate {
    constructor() {
        super();

        this.aggregate = new Array();
    }

    add(item) {
        this.aggregate.push(item);
    }

    get(index) {
        return this.aggregate[index];
    }

    count() {
        return this.aggregate.length;
    }

    createIterator() {
        return new ConcreteIterator(this);
    }
}

module.exports = ConcreteAggregate;