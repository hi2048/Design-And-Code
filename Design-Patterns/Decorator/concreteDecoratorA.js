const Decorator = require('./decorator');

class ConcreteDecorationA extends Decorator {
    constructor(component) {
        super();

        this.component = component;
        this.decoratorA = 'decoratorA';

        console.log('ConcreteDecorationA constructor.');
    }

    Operation() {
        super.Operation();

        console.log(this.decoratorA);
    }
}

module.exports = ConcreteDecorationA;