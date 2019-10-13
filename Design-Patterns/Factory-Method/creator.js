class Creator {
    constructor() {
        if(new.target === Creator)
            throw new Error(`${Creator} cannot be initialized.`);

        console.log('Creator constructor.');
    }

    factoryMethod() {
        return;
    }
}

module.exports = Creator;