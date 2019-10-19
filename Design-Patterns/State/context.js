const states = require('./states');

class Context {
    constructor(state = 'ConcreteStateA') {
        this.state = state;
        
        console.log('Context constructor.');
    }

    setState(state) {
        this.state = state;
    };

    request() {
        new states[this.state]().handle(this);
    };
}

module.exports = Context;