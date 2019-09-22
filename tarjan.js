const Stack = require('./stack.js');

// 有向图的强连通分量算法
// dfs搜索
class Tarjan {
    constructor(n, connections, iDirected = true){
        // 时间戳dfn: dfn[i] dfs搜索编号
        this.dfn = [];

        // 追溯值low: low[i] 初始值为 dfn[i]，后续可能会产生更新， low[i] = Math.min(low[i], [low|dfn][c]) i为父节点
        this.low = [];

        this.n = n;
        this.connections = connections;

        // dfs编号： 时间戳
        this.index = 0;

        this.stack = new Stack();

        // 有向图的强连通分量
        this.sccs = new Stack();

        // 桥
        this.bridges = [];

        // true有向图， false单边无向图
        this.iDirected = iDirected;
    }

    t(x, lastEdge) {
        this.dfn[x] = this.low[x] = ++this.index;
        this.stack.push(x);

        for(let c of this.connections) {
            // c = [x, y]
            // 无向图重边处理
            if(!this.iDirected && c === lastEdge) continue;

            // 默认为有向图
            let directedX = c[0];
            let directedY = c[1];

            // 无向图
            if(!this.iDirected){
                if(x === c[1]){
                    directedX = c[1];
                    directedY = c[0];
                }
            }

            if(directedX === x){
                const y = directedY;

                if(!this.dfn[y]){
                    this.t(y, c);

                    // 若𝑦没被访问过，则说明(𝑥,𝑦)是树枝边，递归访问𝑦,从𝑦回溯后，令𝑙𝑜𝑤[𝑥]=𝑚𝑖𝑛(𝑙𝑜𝑤[𝑥],𝑙𝑜𝑤[𝑦])
                    this.low[x] = Math.min(this.low[x], this.low[y]);

                    // 关键连接 - 桥
                    if(this.low[y] > this.dfn[x]){
                        this.bridges.push(c);
                    }
                } else if(this.stack.has(y)){
                    // 若𝑦被访问过且𝑦在栈中，令𝑙𝑜𝑤[𝑥]=𝑚𝑖𝑛(𝑙𝑜𝑤[𝑥],𝑑𝑓𝑛[𝑦])
                    this.low[x] = Math.min(this.low[x], this.dfn[y]);
                }
            }
        }

        // 𝑙𝑜𝑤[𝑥]=𝑑𝑓𝑛[𝑥]成立，则栈中从𝑥到栈顶的所有节点构成一个强连通分量
        if(this.dfn[x] === this.low[x]){
            const scc = new Stack();

            let y;

            do{
                y = this.stack.pop();
                scc.push(y);
            } while(x !== y);

            this.sccs.push(scc);
        }
    }

    execute() {
        for(let i = 0; i < this.n; i++) {
            if(!this.dfn[i])
                this.t(i);
        }

        return this.sccs;
    }

    getSccs() {
        return this.sccs;
    }

    getBridges() {
        return this.bridges;
    }

    contains(connection) {
        const x = connection[0];
        const y = connection[1];

        for(let scc of this.sccs.getArray()){
            if(scc.has(x) && scc.has(y)){
                return true;
            }
        }

        return false;
    }

    print() {
        this.sccs.print();
    }
}

module.exports = Tarjan;