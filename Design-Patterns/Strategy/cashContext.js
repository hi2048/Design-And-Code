const CashNormal = require('./cashNormal');
const CashRebate = require('./cashRebate');
const CashReturn = require('./cashReturn');

class CashContext {
    constructor(type, args) {
        switch(type.toUpperCase()) {
            case 'NORMAL':
                this.cs = new CashNormal();
                break;
            case 'REBATE':
                this.cs = new CashRebate(args);
                break;
            case 'RETURN':
                this.cs = new CashReturn(args);
                break;
            default:
                this.cs = new CashNormal();
        }
    }

    getResult(money) {
        return this.cs.acceptCash(money);
    }
}

module.exports = CashContext;