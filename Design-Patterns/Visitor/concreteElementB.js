const Element = require('./element');

class ConcreteElementB extends Element {
    accept(visitor) {
        visitor.visitConcreteElementB(this);
    }

    operatorB() {
        console.log(`ConcreteElementB operatorB.`);
    }
}

module.exports = ConcreteElementB;