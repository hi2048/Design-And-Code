class Handler {
    constructor(successor) {
        if(new.target === Handler) {
            throw new Error(`${Handler} cannot be initialized.`);
        }

        this.successor = successor;
    }

    setSuccessor(successor) {
        successor && (this.successor = successor);

        return this;
    }

    handleRequest() {
        throw new Error(`${this.handleRequest} should be overwrite.`);
    }
}

module.exports = Handler;