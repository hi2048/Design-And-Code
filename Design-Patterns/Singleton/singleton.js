class Singleton {
    constructor(name = 'Singleton') {
        if(!Singleton.instance) {
            this.name = name;
            Singleton.instance = this;
        }

        return Singleton.instance
    }

    static getInstance(name) {
        return new Singleton(name);
    }
}

module.exports = Singleton;