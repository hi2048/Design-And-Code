const ObjectStructure = require('./objectStructure');
const ConcreteElementA = require('./concreteElementA');
const ConcreteElementB = require('./concreteElementB');
const ConcreteVisitor1 = require('./concreteVisitor1');
const ConcreteVisitor2 = require('./concreteVisitor2');

const objectStructure = new ObjectStructure();
const concreteELementA = new ConcreteElementA();
objectStructure.add(concreteELementA);
objectStructure.add(new ConcreteElementB());

const concreteVisitor1 = new ConcreteVisitor1();
objectStructure.accept(concreteVisitor1);
objectStructure.accept(new ConcreteVisitor2());