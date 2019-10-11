const Component = require('./component');

class Decoration extends Component {
    constructor(component) {
        if(new.target === Decoration) {
            throw new Error(`${Decoration} cannot be initialized.`);
        }

        super();
        
        this.component = component;

        console.log('Decoration constructor.');
    }

    Operation() {
        if(this.component) {
            this.component.Operation();
        }
    }
}

module.exports = Decoration;