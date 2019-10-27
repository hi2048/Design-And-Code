class Invoker {
    constructor() {
        this.orders = new Set();
    }

    addCommand(command) {
        return command && this.orders.add(command);
    }

    removeCommand(command) {
        return command && this.orders.delete(command);
    }

    notify() {
        this.orders.forEach(order => (order.execute()));
    }
}

module.exports = Invoker;