const ConcreteFlyweight = require('./concreteFlyweight');
const UnsharedConcreteFlyweight = require('./unsharedConcreteFlyweight');
const FlyweightFactory = require('./flyweightFactory');

const concreteFlyweight = new ConcreteFlyweight();
const unsharedConcreteFlyweight = new UnsharedConcreteFlyweight();
const flyweightFactory = new FlyweightFactory();

flyweightFactory.setFlyweight('x', concreteFlyweight);
flyweightFactory.setFlyweight('y', new ConcreteFlyweight());
flyweightFactory.setFlyweight('z', new ConcreteFlyweight());

console.log(flyweightFactory.getFlyweightCount());

let extrinsicState = 20;
flyweightFactory.getFlyweight('x').operation(--extrinsicState);
flyweightFactory.getFlyweight('y').operation(--extrinsicState);
flyweightFactory.getFlyweight('z').operation(--extrinsicState);
unsharedConcreteFlyweight.operation(--extrinsicState);