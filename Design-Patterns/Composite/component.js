class Component {
    constructor(name = 'Component') {
        if(new.target === Component)
            throw new Error(`${Component} cannot be initialized.`);
        
        this.name = name;
    }

    add(c) {
        throw new Error(`${this.add} should be overwrite.`);
    }

    remove(c) {
        throw new Error(`${this.remove} should be overwrite.`);
    }

    display(depth) {
        throw new Error(`${this.display} should be overwrite.`);
    }
}

module.exports = Component;