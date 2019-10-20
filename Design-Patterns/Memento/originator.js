const Memento = require('./memento');

class Originator {
    constructor(state = 'initial state') {
        this.state = state;

        console.log('Originator constructor.');
    }

    setState(state) {
        this.state = state;

        console.log(this.state);
    }

    setMemento(memento) {
        this.state = memento.getState();

        console.log(`Originator setMemento state: ${this.state}.`);
    }

    createMemento() {
        console.log(`Originator createMemento state: ${this.state}.`);

        return new Memento(this.state);
    }
}

module.exports = Originator;