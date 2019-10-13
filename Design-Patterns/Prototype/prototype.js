class Prototype {
    constructor(prototypeId = "prototypeId") {
        if(new.target === Prototype)
            throw new Error(`${Prototype} cannot be initialized.`);

        this.prototypeId = prototypeId;

        console.log('Prototype constructor.');
    }

    clone() {
        return;
    }
}

module.exports = Prototype;