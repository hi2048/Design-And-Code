const Subject = require('./subject');
const RealSubject = require('./realSubject');
const Proxy = require('./proxy');

const proxy = new Proxy();
proxy.request();

console.log('------');
new Proxy(new RealSubject()).request();

console.log('------');
new Subject();