class Visitor {
    constructor() {
        if(new.target === Visitor)
            throw new Error(`${Visitor} cannot be initialized.`);
    }

    visitConcreteElementA(concreteElementA) {
        throw new Error(`${this.visitConcreteElementA} should be overwrite.`);
    }

    visitConcreteElementB(concreteELementB) {
        throw new Error(`${this.visitConcreteElementB} should be overwrite.`);
    }
}

module.exports = Visitor;