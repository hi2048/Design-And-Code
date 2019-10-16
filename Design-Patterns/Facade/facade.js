const SubSystemOne = require('./subSystemOne');
const SubSystemTwo = require('./subSystemTwo');
const SubSystemThree = require('./subSystemThree');
const SubSystemFour = require('./subSystemFour');

class Facade {
    constructor() {
        this.subSystemOne = new SubSystemOne();
        this.subSystemTwo = new SubSystemTwo();
        this.subSystemThree = new SubSystemThree();
        this.subSystemFour = new SubSystemFour();

        console.log('Facade constructor.');
    }

    methodA() {
        console.log('Facade methodA.');
        this.subSystemOne.methodOne();
        this.subSystemTwo.methodTwo();
        this.subSystemFour.methodFour();
    }

    methodB() {
        console.log('Facade methodB.');
        this.subSystemThree.methodThree();
        this.subSystemFour.methodFour();
    }
}

module.exports = Facade;