const ConcreteAggregate1 = require('./concreteAggregate1');
const ConcreteAggregate2  = require('./concreteAggregate2');
const ConcreteAggregate3 = require('./concreteAggregate3');

const concreteAggregate1 = new ConcreteAggregate1();
concreteAggregate1.add('a');
concreteAggregate1.add('b');
concreteAggregate1.add('c');

console.log('Iterator dp1: ');
const iterator1 = concreteAggregate1.createIterator();

let iteratorValueDP1 = iterator1.first();
while(!iterator1.isDone()) {
    console.log(`${iteratorValueDP1} `);

    iteratorValueDP1 = iterator1.next();
}
console.log('------');

console.log('Iterator dp2: ');
const concreteAggregate2 = new ConcreteAggregate2();
concreteAggregate2['0'] = 'a';
concreteAggregate2['1'] = 'b';
concreteAggregate2['2'] = 'c';

const iterator2 = concreteAggregate2.createIterator();

let iteratorValueDP2 = iterator2.first();
while(!iterator2.isDone()) {
    console.log(`${iteratorValueDP2} `);

    iteratorValueDP2 = iterator2.next();
}
console.log('------');

console.log('Iterator dp3: ');
const concreteAggregate3 = new ConcreteAggregate3();
concreteAggregate3[1] = 'a';
concreteAggregate3[2] = 'b';
concreteAggregate3[3] = 'c';

const iterator3 = concreteAggregate3.createIterator();

let iteratorValueDP3 = iterator3.next();
while(!iteratorValueDP3.done) {
    console.log(`${iteratorValueDP3.value} `);

    iteratorValueDP3 = iterator3.next();
}
console.log('------');