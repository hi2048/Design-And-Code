const Operation = require('./operation.js');

class Subtract extends Operation{
    constructor(numberA, numberB){
        super(numberA, numberB);
    }

    getResult(numberA = this.numberA, numberB = this.numberB){
        return numberA - numberB;
    }
}

module.exports = Subtract;