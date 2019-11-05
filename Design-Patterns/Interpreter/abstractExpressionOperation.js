const reTools = require('./reTools');

class AbstractExpressionOperation {
    constructor(operator) {
        if(new.target === AbstractExpressionOperation)
            throw new Error(`${AbstractExpressionOperation} cannot be initialized.`);
        
        this.operator = operator;
    }

    interpret(operator = this.operator, prevExpresstion = this.prevExpresstion, nextExpression = this.nextExpression) {
        if(new RegExp(reTools.verificationRule).test(operator)) {
            return this.execute(operator, prevExpresstion, nextExpression);
        }
    }

    execute(c, exp1, exp2) {
        throw new Error(`${this.execute} should be overwrite.`);
    }
}

module.exports = AbstractExpressionOperation;