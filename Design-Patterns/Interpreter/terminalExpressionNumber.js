const AbstractExpressionOperation = require('./abstractExpressionOperation');

class TerminalExpressionNumber extends AbstractExpressionOperation {
    execute(number = this.operator) {
        return number;
    }
}

module.exports = TerminalExpressionNumber;