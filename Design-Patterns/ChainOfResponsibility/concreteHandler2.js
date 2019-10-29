const Handler = require('./handler');

class ConcreteHandler2 extends Handler {
    constructor(successor) {
        super(successor);
    }

    handleRequest(request) {
        if(request < 20){
            console.log('ConcreteHandler2 handleRequest.');
        } else {
            this.successor && this.successor.handleRequest(request);
        }
    }
}

module.exports = ConcreteHandler2;