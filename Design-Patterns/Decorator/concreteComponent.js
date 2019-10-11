const Component = require('./component');

class ConcreteComponent extends Component {
    constructor() {
        super();

        console.log('ConcreteComponent constructor.');
    }

    Operation() {
        console.log('ConcreteComponent Operation.');
    }
}

module.exports = ConcreteComponent;