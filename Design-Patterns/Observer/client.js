const ConcreteSubject = require('./concreteSubject');
const ConcreteObserver = require('./concreteObserver');

const concreteSubject = new ConcreteSubject();
const concreteObserverX = new ConcreteObserver('X', concreteSubject);
const concreteObserverXX = new ConcreteObserver('X', concreteSubject);
const concreteObserverY = new ConcreteObserver('Y', concreteSubject);
const concreteObserverZ = new ConcreteObserver('Z', concreteSubject);
console.log('------');

concreteSubject.setSubjectState('Changed ConcreteSubject SubjectState.');
console.log('------');

concreteSubject.attach(concreteObserverX);
concreteSubject.setSubjectState('subjectState 1');
console.log('------');

concreteSubject.detach(concreteObserverX);
concreteSubject.setSubjectState('subjectState 2');
console.log('------');

concreteSubject.attach(concreteObserverX);
concreteSubject.attach(concreteObserverY);
concreteSubject.attach(concreteObserverX);
concreteSubject.setSubjectState('subjectState 3');
console.log('------');

concreteSubject.attach(concreteObserverZ);
concreteSubject.setSubjectState('subjectState 4');
console.log('------');

concreteSubject.detach(concreteObserverX);
concreteSubject.setSubjectState('subjectState 5');
console.log('------');

concreteSubject.detach(concreteObserverX);
concreteSubject.setSubjectState('subjectState 6');
console.log('------');

concreteSubject.detach(concreteObserverY);
concreteSubject.detach(concreteObserverZ);
concreteSubject.setSubjectState('subjectState 7');
console.log('------');

concreteSubject.attach(concreteObserverY);
concreteSubject.attach(concreteObserverX);
concreteSubject.attach(concreteObserverXX);
concreteSubject.setSubjectState('subjectState 8');
console.log('------');