const State = require('./state');

class ConcreteStateA extends State {
    constructor() {
        super();

        console.log('ConcreteStateA constructor.');
    }

    handle(context) {
        console.log('Current State: ConcreteStateA. ');

        context.setState('ConcreteStateB');
    }
}

module.exports = ConcreteStateA;