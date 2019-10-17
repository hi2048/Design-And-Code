const Subject = require('./subject');

class ConcreteSubject extends Subject {
    constructor(subjectState = "ConcreteSubject") {
        super();

        this.subjectState = subjectState;

        console.log('ConcreteSubject constructor.');
    }

    setSubjectState(subjectState) {
        this.subjectState = subjectState;
        this.notify();
    }
}

module.exports = ConcreteSubject;