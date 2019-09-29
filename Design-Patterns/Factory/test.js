const OperationFactory = require('./operationFactory.js');

const operationFactory = new OperationFactory();
const operation = operationFactory.createOperator();
const add = operationFactory.createOperator('+');
const substract = operationFactory.createOperator('-');
const multiply = operationFactory.createOperator('*');
const division = operationFactory.createOperator('/');

console.log(operation.getResult());
console.log(add.getResult(2, 3));
console.log(substract.getResult(2, 3));
console.log(multiply.getResult(2, 3));
console.log(division.getResult(2, 3));
console.log(division.getResult(2, 0));
