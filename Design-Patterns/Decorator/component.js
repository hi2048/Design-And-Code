class Component {
    constructor() {
        if(new.target === Component) {
            throw new Error(`${Component} cannot be initialized.`);
        }

        console.log('Component constructor.');
    }

    Operation() {
        console.log('Component operation.');

        return;
    }
}

module.exports = Component;