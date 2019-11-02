const Mediator = require('./mediator');

class ConcreteMediator extends Mediator {
    constructor() {
        super();
    }

    send(message, colleague) {
        this.colleagues.forEach(coll => {
            if(coll !== colleague) {
                coll.notify(message);
            }
        });
    }
}

module.exports = ConcreteMediator;