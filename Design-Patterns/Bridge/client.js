const RefinedAbstraction = require('./refinedAbstraction');
const ConcreteImplementorA = require('./concreteImplementorA');
const ConcreteImplementorB = require('./concreteImplementorB');

const refinedAbstraction = new RefinedAbstraction();
const concreteImplementorA = new ConcreteImplementorA();
const concreteImplementorB = new ConcreteImplementorB();

refinedAbstraction.operation();
console.log('------');

refinedAbstraction.setImplementor().operation();
console.log('------');

refinedAbstraction.setImplementor(concreteImplementorA).operation();
console.log('------');

refinedAbstraction.setImplementor().operation();
console.log('------');

refinedAbstraction.setImplementor(concreteImplementorB).operation();
console.log('------');

new RefinedAbstraction(new ConcreteImplementorB()).operation().setImplementor().operation().setImplementor(new ConcreteImplementorA()).operation();
console.log('------');