const Operation = require('./operation.js');

class Division extends Operation{
    constructor(numberA, numberB) {
        super(numberA, numberB);
    }

    getResult(numberA = this.numberA, numberB = this.numberB) {
        if(numberB === 0) {
            throw new Error('Exception with dividend 0.');
        }

        return numberA / numberB;
    }
}

module.exports = Division;