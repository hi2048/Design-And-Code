const Component = require('./component');

class Leaf extends Component {
    constructor(name) {
        super(name);
    }

    display(depth = 0) {
        console.log(`${'-'.repeat(depth)} ${this.name}`);
    }
}

module.exports = Leaf;