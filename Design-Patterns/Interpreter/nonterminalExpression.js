const AbstractExpression = require('./abstractExpression');

class NonterminalExpression extends AbstractExpression {
    interpret(context) {
        console.log(`NonterminalExpression interpret ${context}.`);
    }
}

module.exports = NonterminalExpression;