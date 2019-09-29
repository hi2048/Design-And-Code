/**
 * 接口
 */

class FlyInterface {
    constructor() {
        if(new.target === FlyInterface){
            throw('Fly Interface cannot be initialized.');
        }
    }

    fly() {
        console.log('fly interface fly.');
    }
}

module.exports = FlyInterface;