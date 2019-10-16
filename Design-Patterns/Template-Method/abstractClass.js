class AbstractClass {
    constructor() {
        if(new.target === AbstractClass)
            throw new Error(`${AbstractClass} cannot be initialized.`);
        
        console.log('AbstractClass constructor.');
    }

    templateMethod() {
        this.primitiveOperation1();
        this.primitiveOperation2();
        console.log('Abstract class template method.');
    }

    primitiveOperation1() {
        throw new Error(`${this.primitiveOperation1} should be overwrite.`)
    }

    primitiveOperation2() {
        throw new Error(`${this.primitiveOperation2} should be overwrite.`);
    }
}

module.exports = AbstractClass;