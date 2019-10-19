class State {
    constructor() {
        if(new.target === State)
            throw new Error(`${State} cannot be initialized.`);

        console.log('State constructor.');
    }

    handle() {
        throw new Error(`${this.handle} should be overwrite.`);
    }
}

module.exports = State;