const Operation = require('./operation.js');

class Add extends Operation{
    constructor(numberA, numberB) {
        super(numberA, numberB);
    }

    getResult(numberA = this.numberA, numberB = this.numberB) {
        return numberA + numberB;
    }
}

module.exports = Add;