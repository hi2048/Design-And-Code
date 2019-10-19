const State = require('./state');

class ConcreteStateB extends State {
    constructor() {
        super();

        console.log('ConcreteStateB constructor.');
    };

    handle(context) {
        console.log('Current State: ConcreteStateB. ');

        context.setState('ConcreteStateC');
    };
}

module.exports = ConcreteStateB;