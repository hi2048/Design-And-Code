const ConcreteFactory1 = require('./concreteFactory1');
const ConcreteFactory2 = require('./concreteFactory2');

const concreteFactory1 = new ConcreteFactory1();
const concreteFactory2 = new ConcreteFactory2();
console.log('------');

concreteFactory1.createProductA().method();
console.log('------');

concreteFactory1.createProductB().method();
console.log('------');

concreteFactory2.createProductA().method();
concreteFactory2.createProductB().method();
console.log('------');