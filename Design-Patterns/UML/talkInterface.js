class TalkInterface {
    constructor(){
        if(new.target === TalkInterface){
            throw new Error('Talk Interface cannot be initialized.');
        }

        console.log('Talk Interface Constructor.');
    }

    talk() {
        console.log('talk interface talk.');
    }
}

module.exports = TalkInterface;