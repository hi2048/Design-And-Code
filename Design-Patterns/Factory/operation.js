class Operation {
    constructor(numberA, numberB) {
        this.numberA = numberA;
        this.numberB = numberB;
    }

    getResult(numberA = this.numberA, numberB = this.numberB) {
        console.log('Operation getResult.');
        
        return;
    }
}

module.exports = Operation;