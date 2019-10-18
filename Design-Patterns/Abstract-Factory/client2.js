const ProductAccess = require('./productAccess');
const productClasses = require('./productClasses');

console.dir(productClasses);
console.log('------');

const productAccess = new ProductAccess();
console.log('------');

productAccess.create().method();
console.log('------');

productAccess.create('ProductB1').method();
console.log('------');

productAccess.create('ProductA1').method();
console.log('------');

productAccess.create('ProductA2').method();
productAccess.create('ProductB2').method();
console.log('------');