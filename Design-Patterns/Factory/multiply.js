const Operation = require('./operation.js');

class Multiply extends Operation{
    constructor(numberA, numberB) {
        super(numberA, numberB);
    }

    getResult(numberA = this.numberA, numberB = this.numberB){
        return numberA * numberB;
    }
}

module.exports = Multiply;