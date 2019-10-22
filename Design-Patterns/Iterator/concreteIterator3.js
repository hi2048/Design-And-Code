const Iterator = require('./iterator');

class ConcreteIterator3 extends Iterator {
    constructor(aggregate = {}) {
        super();

        this.aggregate = aggregate;
        this.initAggregateIterator();

        // init iterator
        this.iterator = this.aggregate[Symbol.iterator]();
    }

    initAggregateIterator() {
        this.aggregate[Symbol.iterator] = function *() {
            const aggregateValues = Object.values(this);

            for(let value of aggregateValues) {
                yield value;
            }
        }
    }

    next() {
        return this.iterator.next();
    }
}

module.exports = ConcreteIterator3;