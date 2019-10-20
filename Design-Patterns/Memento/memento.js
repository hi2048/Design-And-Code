class Memento {
    constructor(state) {
        this.state = state;

        console.log('Memento constructor.');
    }

    getState() {
        return this.state;
    }
}

module.exports = Memento;