const Colleague = require('./colleague');

class ConcreteColleague1 extends Colleague {
    constructor(mediator) {
        super(mediator);
    }

    notify(message) {
        console.log(`ConcreteColleague1 notify ${message}.`);
    }
}

module.exports = ConcreteColleague1;