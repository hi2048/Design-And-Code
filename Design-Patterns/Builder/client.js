const Director = require('./director');
const Product = require('./product');
const ConcreteBuilder1 = require('./concreteBuilder1');
const ConcreteBuilder2 = require('./concreteBuilder2');

const director = new Director();
console.log('------');

const concreteBuilder1 = new ConcreteBuilder1();
director.construct(concreteBuilder1);
concreteBuilder1.getResult().show();
console.log('------');

const productB = new Product();
const concreteBuilder2 = new ConcreteBuilder2(productB);
director.construct(concreteBuilder2);
console.log('product B: ');
productB.show();
console.log('concreteBuilder2 getResult: ');
concreteBuilder2.getResult().show();
console.log('------');