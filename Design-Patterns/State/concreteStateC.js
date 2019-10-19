const State = require('./state');

class ConcreteStateC extends State {
    constructor() {
        super();

        console.log('ConcreteStateC constructor.');
    }

    handle(context) {
        console.log('Current State: ConcreteStateC. ');

        context.setState('ConcreteStateA');
    };
}

module.exports = ConcreteStateC;