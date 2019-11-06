class ObjectStructure {
    constructor() {
        this.elements = new Set();
    }

    add(element) {
        return element && this.elements.add(element);
    }

    remove(element) {
        return this.elements.delete(element);
    }

    accept(visitor) {
        this.elements.forEach(element => (element.accept(visitor)));
    }
}

module.exports = ObjectStructure;