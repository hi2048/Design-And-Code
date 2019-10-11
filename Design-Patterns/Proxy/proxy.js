const Subject = require('./subject');
const RealSubject = require('./realSubject');

class Proxy extends Subject {
    constructor(realSubject) {
        super();

        this.realSubject = this.initRealSubject(realSubject);

        console.log('Proxy constructor.');
    }

    initRealSubject(realSubject) {
        return realSubject || new RealSubject();
    }

    getRealSubject() {
        return this.realSubject;
    }

    request() {
        this.getRealSubject().request();
    }
}

module.exports = Proxy;