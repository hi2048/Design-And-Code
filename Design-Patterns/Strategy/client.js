const CashContext = require('./cashContext');

//test
let cs = new CashContext('Normal');
console.log(cs.getResult(100));

cs = new CashContext('REBATE', {'rebate': .8});
console.log(cs.getResult(100));

cs = new CashContext('return', {'condition': 300, 'moneyReturn': 100});
console.log(cs.getResult(300));
console.log(cs.getResult(500));
console.log(cs.getResult(600));