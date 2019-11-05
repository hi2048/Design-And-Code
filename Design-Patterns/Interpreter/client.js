const Context = require('./context');
const TerminalExpression = require('./terminalExpression');
const NonterminalExpression = require('./nonterminalExpression');

const reTools = require('./reTools');
const TerminalExpressionNumber = require('./terminalExpressionNumber');
const NonterminalExpressionPlus = require('./nonterminalExpressionPlus');
const NonterminalExpressionMinus = require('./nonterminalExpressionMinus');

const context = new Context('Interpreter DP');
const terminalExpression = new TerminalExpression();
const nonterminalExpression = new NonterminalExpression();
const interpreter1 = new Set();
interpreter1.add(terminalExpression);
interpreter1.add(new TerminalExpression());
interpreter1.add(nonterminalExpression);

interpreter1.forEach(interpreter => (interpreter.interpret(context.getContent())));
console.log('------');

const context2 = new Context('1 + 2');
const content = context2.getContent();
let experssions = [];

for(let c of content) {
    if(new RegExp(reTools.numbers).test(c)) {
        experssions.push(new TerminalExpressionNumber(c))
    } else if(c === '+') {
        experssions.push(new NonterminalExpressionPlus(c));
    } else if(c === '-') {
        experssions.push(new NonterminalExpressionMinus(c));
    }
}

experssions.forEach((expression, index, expressions) => {
    if(!(expression instanceof TerminalExpressionNumber)) {
        expression.setPrevExpression(expressions[index - 1]);
        expression.setNextExpression(expressions[index + 1]);
        expression.interpret()
    }
});
console.log('------');

const context3 = new Context('2 - 3');
const expressions3 = [];

for(let c of context3.getContent()) {
    if(new RegExp(reTools.numbers).test(c)) {
        expressions3.push(new TerminalExpressionNumber(c));
    } else if(c === '+') {
        expressions3.push(new NonterminalExpressionPlus(c));
    } else if(c === '-') {
        expressions3.push(new NonterminalExpressionMinus(c));
    }
}

expressions3.forEach((expression, index, expressions) => {
    if(!(expression instanceof TerminalExpressionNumber)) {
        expression.interpret(undefined, expressions[index - 1], expressions[index + 1]);
    }
});
console.log('------');
