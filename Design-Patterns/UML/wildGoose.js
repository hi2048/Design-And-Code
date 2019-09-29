/**
 * 继承鸟
 * 实线空心三角
 */
const Bird = require('./bird.js');

class WildGoose extends Bird {
    constructor() {
        super();

        console.log('WildGoose Construdtor.');
    }

    deposit() {
        console.log('WildGoose Deposit.');
    }

    fly() {
        console.log('WildGoose Fly.');
    }
}

module.exports = WildGoose;