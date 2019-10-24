const Singleton = require('./singleton');

const singleton = Singleton.getInstance();
const singleton2 = Singleton.getInstance('singleton2');
const singleton3 = new Singleton('singleton3');
const singleton4 = new Singleton('singleton4');

console.log(singleton === singleton2);
console.log(singleton === singleton3);
console.log(singleton === singleton4);