const Iterator = require('./iterator');

class ConcreteIterator2 extends Iterator {
    constructor(aggregate = {}) {
        super();

        this.aggregate = aggregate;
        
        this.initAggregateIterator();

        // init iterator
        this.iterator = this.aggregate[Symbol.iterator]();
    }

    initAggregateIterator() {
        this.aggregate[Symbol.iterator] = function() {
            const aggregate = this;
            const keys = Object.keys(aggregate);
            let curIndex = 0;
    
            return {
                first: function() {
                    return aggregate[keys[curIndex]];
                },
                next: function () {
                    curIndex++;
    
                    if(curIndex < keys.length) {
                        return this.currentItem();
                    }
    
                    return undefined;
                },
                isDone: function() {
                    return curIndex < keys.length? false : true;
                },
                currentItem: function() {
                    return aggregate[keys[curIndex]];
                }
            }
        }
    }

    first() {
        return this.iterator.first();
    }

    next() {
        return this.iterator.next();
    }

    isDone() {
        return this.iterator.isDone();
    }

    currentItem() {
        return this.iterator.currentItem();
    }
}

module.exports = ConcreteIterator2;