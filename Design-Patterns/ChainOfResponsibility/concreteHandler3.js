const Handler = require('./handler');

class ConcreteHandler3 extends Handler {
    constructor(successor) {
        super(successor);
    }

    handleRequest(request) {
        console.log('ConcreteHandler3 handleRequest.');
    }
}

module.exports = ConcreteHandler3;