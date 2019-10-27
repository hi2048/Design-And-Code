class Command {
    constructor(receiver) {
        if(new.target === Command)
            throw new Error(`${Command} cannot be initialized.`);

        this.receiver = receiver;
    }

    setReceiver(receiver) {
        return receiver && (this.receiver = receiver);
    }

    execute() {
        throw new Error(`{this.execute} should be overwrite.`);
    }
}

module.exports = Command;