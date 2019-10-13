const ConcreteCreator = require('./concreteCreator');

const concreteCreator = new ConcreteCreator();
const concreteProduct = concreteCreator.factoryMethod();

concreteProduct.method();