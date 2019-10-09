const CashSuper = require('./cashSuper.js');

class CashNormal extends CashSuper {
    constructor() {
        super();

        console.log('CashNormal constructor.');
    }

    acceptCash(money) {
        return money;
    }
}

module.exports = CashNormal;