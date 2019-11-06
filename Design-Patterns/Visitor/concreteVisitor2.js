const Visitor = require('./visitor');

class ConcreteVisitor2 extends Visitor {
    visitConcreteElementA(concreteElementA) {
        console.log(`${this.constructor.name} visitConcreteElementA ${concreteElementA.constructor.name} .`);
    }

    visitConcreteElementB(concreteElementB) {
        console.log(`${this.constructor.name} visitConcreteElementB ${concreteElementB.constructor.name} .`);
    }
}

module.exports = ConcreteVisitor2;