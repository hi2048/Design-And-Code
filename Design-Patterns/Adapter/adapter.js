const Target = require('./target');
const Adaptee = require('./adaptee');

class Adapter extends Target {
    constructor(adaptee = new Adaptee()) {
        super();

        this.adaptee = adaptee;

        console.log('Adapter constructor.');
    }

    request() {
        this.adaptee.specificRequest();
    }
}

module.exports = Adapter;