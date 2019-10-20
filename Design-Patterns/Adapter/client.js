const Adapter = require('./adapter');
const Adaptee = require('./adaptee');

const adapter = new Adapter(new Adaptee());
adapter.request();
console.log('------');

const adapter2 = new Adapter();
adapter2.request();
console.log('------');