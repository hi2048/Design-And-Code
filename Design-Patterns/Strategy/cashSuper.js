class CashSuper {
    constructor() {
        if(new.target === CashSuper)
            throw new Error(`${CashSuper} cannot be initialized.`);

        console.log('CashSuper constructor.');
    }

    acceptCash(money) {
        console.log('CashSuper acceptCash.');

        return;
    }
}

module.exports = CashSuper;