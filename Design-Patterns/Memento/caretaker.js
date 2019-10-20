const Memento = require('./memento');

class Caretaker {
    constructor() {
        console.log('Caretaker constructor.');
    }

    setMemento(memento) {
        this.memento = memento;
    }

    getMemento() {
        return this.memento;
    }
}

module.exports = Caretaker;