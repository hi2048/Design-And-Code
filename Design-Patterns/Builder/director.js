class Director {
    constructor() {
        console.log('Director constructor.');
    }

    construct(builder) {
        builder.buildPartA();
        builder.buildPartB();

        console.log('Director construct.');
    }
}

module.exports = Director;