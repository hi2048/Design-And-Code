class FlyweightFactory {
    constructor() {
        this.flyweights = new Map();
    }

    getFlyweight(key) {
        return this.flyweights.get(key);
    }

    setFlyweight(key, value) {
        this.flyweights.set(key, value);
    }

    getFlyweightCount() {
        return this.flyweights.size;
    }
}

module.exports = FlyweightFactory;