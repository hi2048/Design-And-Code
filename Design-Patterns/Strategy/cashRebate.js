const CashSuper = require('./cashSuper');

class CashRebate extends CashSuper {
    constructor({rebate = 1}) {
        super();

        console.log('CashRebate constructor.');
        this.rebate = rebate;
    }

    acceptCash(money) {
        return money * this.rebate;
    }
}

module.exports = CashRebate;