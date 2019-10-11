const Decorator = require('./decorator');

class ConcreteDecoratorB extends Decorator {
    constructor(component) {
        super();

        this.component = component;
        this.decoratorB = 'decoratorB';

        console.log('ConcreteDecoratorB constructor.');
    }

    Operation() {
        super.Operation();

        console.log(this.decoratorB);
    }
}

module.exports = ConcreteDecoratorB;