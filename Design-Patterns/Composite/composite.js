const Component = require('./component');

class Composite extends Component {
    constructor(name) {
        super(name);

        this.components = new Set();
    }

    add(c) {
        this.components.add(c);
    }

    remove(c) {
        this.components.delete(c);
    }

    display(depth = 1) {
        console.log(`${'-'.repeat(depth)} ${this.name}`);

        this.components.forEach((component) => (component.display(depth + 2)));
    }
}

module.exports = Composite;