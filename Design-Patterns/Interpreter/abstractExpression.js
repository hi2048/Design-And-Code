class AbstractExpression {
    constructor() {
        if(new.target === AbstractExpression) {
            throw new Error(`${AbstractExpression} cannot be initialized.`);
        }
    }

    interpret() {
        throw new Error(`${this.interpret} should be overwrite.`);
    }
}

module.exports = AbstractExpression;