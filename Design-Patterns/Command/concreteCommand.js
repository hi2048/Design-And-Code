const Command = require('./command');

class ConcreteCommand extends Command {
    constructor(receiver = {}) {
        super(receiver);
    }

    execute() {
        this.receiver.action();
    }
}

module.exports = ConcreteCommand;