class Subject {
    constructor() {
        if(new.target === Subject)
            throw new Error(`${Subject} cannot be initialized.`);
        
        this.observers = new Set();

        console.log("Subject constructor.");
    }

    attach(observer) {
        this.observers.add(observer);
    }

    detach(observer) {
        this.observers.delete(observer);
    }

    notify() {
        console.log('notify');
        this.observers.forEach((observer) => (observer.update()));
    }
}

module.exports = Subject;