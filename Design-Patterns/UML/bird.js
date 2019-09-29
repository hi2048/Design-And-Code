/**
 * 继承animal
 * 实线空心三角
 */

const Animal = require('./animal.js');
const Wing = require('./wing.js');

class Bird extends Animal {
    constructor(feather) {
        super();

        console.log('Bird constructor.');
        this.feather = feather;
        this.wings = new Wing();
    }

    metaboly() {
        // super.metaboly();

        console.log('Bird metaboly.');
    }

    deposit() {}
}

module.exports = Bird;