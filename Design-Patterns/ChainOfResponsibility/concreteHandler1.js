const Handler = require('./handler');

class ConcreteHandler1 extends Handler {
    constructor(successor) {
        super(successor);
    }

    handleRequest(request) {
        if(request < 10) {
            console.log('Concretehandler1 handleRequest.');
        } else {
            this.successor && this.successor.handleRequest(request);
        }
    }
}

module.exports = ConcreteHandler1;