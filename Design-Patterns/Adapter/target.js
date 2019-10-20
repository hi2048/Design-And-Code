class Target {
    constructor() {
        if(new.target === Target)
            throw new Error(`${Target} cannot be initialized.`);

        console.log('Target constructor.');
    }

    request() {
        throw new Error(`${this.request} should be overwrite.`);
    }
}

module.exports = Target;