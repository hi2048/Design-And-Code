const Iterator = require('./iterator');

class ConcreteIterator4 extends Iterator {
    constructor(aggregate = []) {
        super();

        this.aggregate = aggregate;
        this.curIndex = 0;
    }

    first() {
        return this.aggregate[this.curIndex];
    }

    next() {
        let ret = null;
        this.curIndex ++;

        if(this.curIndex < this.aggregate.length) {
            ret = this.currentItem();
        }

        return ret;
    }

    isDone() {
        return this.curIndex < this.aggregate.length?false : true;
    }

    currentItem() {
        return this.aggregate[this.curIndex];
    }
}

module.exports = ConcreteIterator4;