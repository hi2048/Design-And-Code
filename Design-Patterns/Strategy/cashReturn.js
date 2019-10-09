const CashSuper = require('./cashSuper');

class CashReturn extends CashSuper {
    constructor({condition = 0, moneyReturn = 0}) {
        super();

        console.log('CashReturn constructor.');
        this.condition = condition;
        this.moneyReturn = moneyReturn;
    }

    acceptCash(money) {
        let result = money;

        if(money >= this.condition) {
            result -= Math.floor(money / this.condition) * this.moneyReturn;
        }

        return result;
    }
}

module.exports = CashReturn;