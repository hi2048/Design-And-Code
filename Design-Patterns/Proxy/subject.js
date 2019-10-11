class Subject {
    constructor() {
        if(new.target === Subject)
            throw new Error(`${Subject} cannot be initialized.`);

        console.log('Subject constructor.');
    }

    request() {
        console.log('Subject request.');

        return;
    }
}

module.exports = Subject;