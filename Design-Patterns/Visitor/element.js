class Element {
    constructor() {
        if(new.target === Element)
            throw new Error(`${Element} cannot be initialized.`);
    }

    accept(vistor) {
        throw new Error(`${this.accept} should be overwrite.`);
    }
}

module.exports = Element;