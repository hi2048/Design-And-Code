const Aggregate = require('./aggregate');
const ConcreteIterator4 = require('./concreteIterator4');

class ConcreteAggregate4 extends Aggregate {
    constructor() {
        super();

        this.item = new Array();

        // super array simulate indexer
        this.extend(this.item, this, Reflect.getPrototypeOf(this));

        return this.item;
    }

    extend(target, ...origins) {
        for(let origin of origins) {
            const keys = Reflect.ownKeys(origin);

            for(let key of keys) {
                target[key] = origin[key];
            }
        }
    }

    createIterator() {
        return new ConcreteIterator4(this.item);
    }
}

module.exports = ConcreteAggregate4;