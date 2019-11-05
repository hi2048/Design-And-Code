const AbstractExpressionOperation = require('./abstractExpressionOperation');

class NonterminalExpressionPlus extends AbstractExpressionOperation {
    constructor(operator, prevExpression, nextExpression) {
        super(operator);

        this.prevExpression = prevExpression;
        this.nextExpression = nextExpression;
    }

    setPrevExpression(prevExpression) {
        return prevExpression && (this.prevExpression = prevExpression);
    }

    setNextExpression(nextExpression) {
        return nextExpression && (this.nextExpression = nextExpression);
    }

    execute(operator = this.operator, expression1 = this.prevExpression, expression2 = this.nextExpression) {
        console.log(`NonterminalExpressionPlus execute: ${expression1.interpret()} + ${expression2.interpret()} = ${+expression1.interpret() + +expression2.interpret()} .`);

        return +expression1.interpret() + +expression2.interpret();
    }
}

module.exports = NonterminalExpressionPlus;