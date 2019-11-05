const AbstractExpression = require('./abstractExpression');

class TerminalExpression extends AbstractExpression {
    interpret(context) {
        console.log(`TerminalExpression interpret ${context}.`);
    }
}

module.exports = TerminalExpression;