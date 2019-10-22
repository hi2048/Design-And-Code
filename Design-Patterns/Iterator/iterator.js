class Iterator {
    constructor() {
        if(new.target === Iterator)
            throw new Error(`${Iterator} cannot be initialized.`);
    }

    first() {
        throw new Error(`${this.first} should be overwrite.`);
    }

    next() {
        throw new Error(`${this.next} should be overwrite.`);
    }

    isDone() {
        throw new Error(`${this.isDone} should be overwrite.`);
    }

    currentItem() {
        throw new Error(`${this.currentItem} should be overwrite.`);
    }
}

module.exports = Iterator;