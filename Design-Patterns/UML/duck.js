/**
 * 继承自鸟
 * 实线空心三角
 */

class Duck extends Bird {
    constructor() {
        super();

        console.log('Duck constructor.');
    }
}

module.exports = Duck;