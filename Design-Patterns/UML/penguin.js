/**
 * 继承自鸟
 * 实线空心三角
 */
const Bird = require('./bird.js');
const Climate = require('./climate.js');

class Penguin extends Bird {
    constructor() {
        super();
        
        console.log('Penguin Constructor.');
        this.climate = new Climate();
    }
}

module.exports = Penguin;