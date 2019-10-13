const ConcretePrototype1 = require('./concretePrototype1');
const ConcretePrototype2 = require('./concretePrototype2');

const concretePrototype1 = new ConcretePrototype1();
const concretePrototype2 = new ConcretePrototype2();

// test prototype1 clone
const prototype1Demo1 = concretePrototype1.clone();
const prototype1Demo2 = concretePrototype1.clone();

console.log(prototype1Demo1);
console.log(prototype1Demo2);

prototype1Demo1.id = 'id1';

console.log(prototype1Demo1);
console.log(prototype1Demo2);

prototype1Demo2.id = 'id2';

console.log(prototype1Demo1);
console.log(prototype1Demo2);

console.log('------');

const prototype2Demo1 = concretePrototype2.clone();
const prototype2Demo2 = concretePrototype2.clone({name: "prototype2demo2 name2"});

console.dir(prototype2Demo1);
console.dir(prototype2Demo2);

prototype2Demo1.name = 'change name 1';
console.dir(prototype2Demo1);
console.dir(prototype2Demo2);

prototype2Demo2.name = 'change name 2';
console.dir(prototype2Demo1);
console.dir(prototype2Demo2);

console.log('------');
