const Flyweight = require('./flyweight');

class UnsharedConcreteFlyweight extends Flyweight {
    constructor() {
        super();
    }

    operation(extrinsicState) {
        console.log(`UnsharedConcreteFlyweight operation: unshared ${extrinsicState}`);
    }
}

module.exports = UnsharedConcreteFlyweight;