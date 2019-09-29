const Operation = require('./operation.js');
const Add = require('./add.js');
const Subtract = require('./subtract.js');
const Multiply = require('./multiply.js');
const Division = require('./division.js');

class OperationFactory {
    constructor(operate){
        this.operate = operate;
    }

    createOperator(operate) {
        switch(this.operate || operate) {
            case '+':
                return new Add();
            case '-':
                return new Subtract();
            case '*':
                return new Multiply();
            case '/':
                return new Division();
            default:
                return new Operation();
        }
    }
}

module.exports = OperationFactory;