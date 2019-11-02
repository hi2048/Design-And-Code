const ConcreteMediator = require('./concreteMediator');
const ConcreteColleague1 = require('./concreteColleague1');
const ConcreteColleague2 = require('./concreteColleague2');

const concreteMediator = new ConcreteMediator();
const concreteColleague1 = new ConcreteColleague1(concreteMediator);
const concreteColleague2 = new ConcreteColleague2(concreteMediator);

concreteMediator.addColleague(concreteColleague1);
concreteMediator.addColleague(concreteColleague2);

concreteColleague1.send('concreteColleague1 send message 1');
concreteColleague2.send('concreteColleague2 send message 2');
concreteColleague2.send('concreteColleague2 send message 3');
concreteColleague1.send('concreteColleague1 send message 4');