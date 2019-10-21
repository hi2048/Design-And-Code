const Composite = require('./composite');
const Leaf = require('./leaf');

const root = new Composite('Root');

root.add(new Leaf('Leaf11'));
root.add(new Leaf('Leaf12'));

const composite1 = new Composite('Composite11');
root.add(composite1);

const leaf21 = new Leaf('Leaf21');
composite1.add(leaf21);

const composite2 = new Composite('Composite21');
composite1.add(composite2);

composite1.add(new Leaf('Leaf22'));

composite2.add(new Leaf('Leaf31'));

root.add(new Leaf('Leaf13'));

const leaf14 = new Leaf('Leaf14');
root.add(leaf14);
composite1.remove(leaf21);

root.display(2);