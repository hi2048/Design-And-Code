class Builder {
    constructor() {
        if(new.target === Builder)
            throw new Error(`${Builder} cannot be initialized.`);
        
        console.log('Builder constructor.');
    }

    buildPartA() {
        throw new Error(`${this.buildPartA} should be overwrite.`);
    }

    buildPartB() {
        throw new Error(`${this.buildPartB} should be overwrite.`);
    }

    getResult() {
        throw new Error(`${this.getResult} should be overwrite.`);
    }
}

module.exports = Builder;