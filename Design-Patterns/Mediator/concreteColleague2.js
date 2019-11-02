const Colleague = require('./colleague');

class ConcreteColleague2 extends Colleague {
    constructor(mediator) {
        super(mediator);
    }

    notify(message) {
        console.log(`ConcreteColleague2 notify ${message}.`);
    }
}

module.exports = ConcreteColleague2;