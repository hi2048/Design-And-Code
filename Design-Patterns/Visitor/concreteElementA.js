const Element = require('./element');

class ConcreteElementA extends Element {
    accept(visitor) {
        visitor.visitConcreteElementA(this);
    }

    operatorA() {
        console.log('ConcreteElementA operatorA.');
    }
}

module.exports = ConcreteElementA;