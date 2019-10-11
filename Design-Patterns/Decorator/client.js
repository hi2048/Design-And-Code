const ConcreteComponent = require('./concreteComponent');
const ConcreteDecoratorA = require('./concreteDecoratorA');
const ConcreteDecoratorB = require('./concreteDecoratorB');

console.log('------');
const concreteComponent = new ConcreteComponent();
concreteComponent.Operation();
console.log('------');

// test decorator A 1
console.log('------');
const decoratorA1 = new ConcreteDecoratorA();
decoratorA1.Operation();
console.log('------');

// test decorator A 2
console.log('------');
const decoratorA2 = new ConcreteDecoratorA(concreteComponent);
decoratorA2.Operation();
console.log('------');

// test decorator B
console.log('------');
const decoratorB = new ConcreteDecoratorB(concreteComponent);
decoratorB.Operation();
console.log('------');

// test decorator ABAAB
const decorationABAAB = new ConcreteDecoratorB(new ConcreteDecoratorA(new ConcreteDecoratorA(new ConcreteDecoratorB(new ConcreteDecoratorA(new ConcreteComponent())))));
decorationABAAB.Operation();
