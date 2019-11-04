const Flyweight = require('./flyweight');

class ConcreteFlyweight extends Flyweight {
    constructor() {
        super();
    }

    operation(extrinsicState) {
        console.log(`ConcreteFlyweight operation: shared ${extrinsicState}`);
    }
}

module.exports = ConcreteFlyweight;