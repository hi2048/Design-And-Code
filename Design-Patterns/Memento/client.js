const Originator = require('./originator');
const Caretaker = require('./caretaker');

const originator = new Originator();
const caretaker = new Caretaker();

const memento1 = originator.createMemento();
caretaker.setMemento(memento1);
originator.setState('state1');
originator.setMemento(caretaker.getMemento());
console.log('------');

originator.setState('state2');
caretaker.setMemento(originator.createMemento());
originator.setState('state3');
originator.setMemento(caretaker.getMemento());
console.log('------');
