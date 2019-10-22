class Aggregate {
    constructor() {
        if(new.target === Aggregate)
            throw new Error(`${Aggregate} cannot be initialized.`);
    }

    createIterator() {
        throw new Error(`${this.createIterator} should be overwrite.`);
    }
}

module.exports = Aggregate;