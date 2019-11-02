class Mediator {
    constructor() {
        if(new.target === Mediator)
            throw new Error(`${Mediator} cannot be initialized.`);

        this.colleagues = new Set();
    }

    addColleague(colleague) {
        colleague && this.colleagues.add(colleague);

        return this;
    }

    removeColleague(colleague) {
        this.colleagues.delete(colleague);

        return this;
    }

    send(message, colleague) {
        throw new Error(`${this.send} should be overwrite.`);
    }
}

module.exports = Mediator;