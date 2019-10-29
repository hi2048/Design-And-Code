const ConcreteHandler1 = require('./concreteHandler1');
const ConcreteHandler2 = require('./concreteHandler2');
const ConcreteHandler3 = require('./concreteHandler3');

const concreteHandler3 = new ConcreteHandler3();
const concreteHandler2 = new ConcreteHandler2();
const concreteHandler1 = new ConcreteHandler1(concreteHandler2);
concreteHandler2.setSuccessor(concreteHandler3);

const request = [9, 10, 19, 20, 30, 999];

request.forEach(req => (concreteHandler1.handleRequest(req)));