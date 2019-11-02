class Colleague {
    constructor(mediator) {
        if(new.target === Colleague) {
            throw new Error(`${Colleague} cannot be initialized.`);
        }

        this.mediator = mediator;
    }

    setMediator(mediator) {
        mediator && (this.mediator = mediator);

        return this;
    }

    send(message) {
        this.mediator.send(message, this);
    }

    notify(message) {
        throw new Error(`${this.notify} should be overwrite.`);
    }
}

module.exports = Colleague;