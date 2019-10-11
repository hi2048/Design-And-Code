const Subject = require('./subject');

class RealSubject extends Subject {
    constructor() {
        super();

        console.log('RealSubject constructor.');
    }

    request() {
        console.log('RealSubject request.');
    }
}

module.exports = RealSubject;