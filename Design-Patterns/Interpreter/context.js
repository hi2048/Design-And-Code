class Context {
    constructor(content) {
        this.content = content;
    }

    setContent(content) {
        return content && (this.content = content);
    }

    getContent() {
        return this.content;
    }
}

module.exports = Context;