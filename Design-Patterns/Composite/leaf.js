const Component = require('./component');

class Leaf extends Component {
    constructor(name) {
        super(name);
    }

    display(depth = 1) {
        console.log(`${'-'.repeat(depth)} ${this.name}`);
    }
}

module.exports = Leaf;