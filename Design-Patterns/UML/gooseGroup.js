/**
 * 与大雁： 聚合关系
 * 雁群： 空心菱形
 * 大雁： 实线箭头
 */
const WildGoose = require('./wildGoose.js');

class GooseGroup {
    constructor(){
        this.wildGooses = new WildGoose();
        console.log('GooseGroup Constructor.');
    }
}

module.exports = GooseGroup;