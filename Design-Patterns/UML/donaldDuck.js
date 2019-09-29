/**
 * 实现接口： talkInterface
 * 虚线空心三角 或者 实线空心小圆
 */
const TalkInterface = require('./talkInterface.js');

class DonaldDuck extends TalkInterface {
    constructor(){
        super();

        console.log('Donald Duck Constructor.');
    }

    talk() {
        super.talk();

        console.log('Donald Duck talk.');
    }
}

module.exports = DonaldDuck;