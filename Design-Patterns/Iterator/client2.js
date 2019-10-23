const ConcreteAggregate4 = require('./concreteAggregate4');

const concreteAggregate4 = new ConcreteAggregate4();
concreteAggregate4[0] = 'a';
concreteAggregate4[1] = 'b';
concreteAggregate4[2] = 'c';

const iterator = concreteAggregate4.createIterator();

let iteratorValue = iterator.first();
while(!iterator.isDone()) {
    console.log(`${iteratorValue} `);

    iteratorValue = iterator.next();
}

console.log('------');