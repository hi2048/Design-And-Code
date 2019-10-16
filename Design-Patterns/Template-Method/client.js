const AbstractClass = require('./abstractClass');
const ConcreteClass1 = require('./concreteClass1');
const ConcreteClass2 = require('./concreteClass2');
const ConcreteClass3 = require('./concreteClass3');

// test1
// const abstractClass = new AbstractClass();

// test concrete class 1
const concreteClass1 = new ConcreteClass1();
concreteClass1.templateMethod();
console.log('------');

// test concrete class 2
const concreteClass2 = new ConcreteClass2();
concreteClass2.templateMethod();
console.log('------');

// test concrete class 3
const concreteClass3 = new ConcreteClass3();
concreteClass3.templateMethod();
console.log('------');