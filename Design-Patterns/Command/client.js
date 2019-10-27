const Invoker = require('./invoker');
const Receiver = require('./receiver');
const ConcreteCommand = require('./concreteCommand');

const invoker = new Invoker();
const receiver = new Receiver();

const concreteCommand1 = new ConcreteCommand();
concreteCommand1.setReceiver(receiver);

const concreteCommand2 = new ConcreteCommand(receiver);
const concreteCommand3 = new ConcreteCommand(receiver);

invoker.addCommand(concreteCommand1);
invoker.addCommand();
invoker.addCommand(concreteCommand1);
invoker.addCommand(concreteCommand2);
invoker.addCommand(concreteCommand3);

invoker.removeCommand();
invoker.removeCommand(concreteCommand1);
invoker.removeCommand();
invoker.removeCommand(concreteCommand1);

invoker.notify();
