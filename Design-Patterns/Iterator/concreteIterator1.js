const Iterator = require('./iterator');

class ConcreteIterator extends Iterator {
    constructor(aggregate = {}) {
        super();

        this.aggregate = aggregate;
        this.cur = 0;
    }

    first() {
        return this.aggregate.get(0);
    }

    next() {
        this.cur++;

        if(this.cur < this.aggregate.count()) {
            return this.currentItem();
        }

        return undefined;
    }

    isDone() {
        return this.cur < this.aggregate.count()? false : true;
    }

    currentItem() {
        return this.aggregate.get(this.cur);
    }
}

module.exports = ConcreteIterator;