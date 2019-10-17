const Observer = require('./observer');

class ConcreteObserver extends Observer {
    constructor(name = "concreteObserver", subject = {}) {
        super();

        this.name = name;
        this.subject = subject;
        this.observerState = subject.subjectState;

        console.log('ConcreteObserver constructor.');
    }

    update() {
        this.observerState = this.subject.subjectState;
        console.log(`${this.observerState} notify ${this.name}.`);
    }
}

module.exports = ConcreteObserver;