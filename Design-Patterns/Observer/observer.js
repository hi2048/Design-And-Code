class Observer {
    constructor() {
        if(new.target === Observer)
            throw new Error(`${Observer} cannot be initialized.`);

        console.log('Observer constructor.');
    }

    update() {
        throw new Error(`${this.update} should be overwrite.`);
    }
}

module.exports = Observer;