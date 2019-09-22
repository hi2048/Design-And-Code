// 先进后出 FILO: first in last out
class Stack {
  constructor(){
    this.stack = new Array();
  }

  pop() {
    return this.stack.pop();
  }

  push(x) {
    this.stack.push(x);

    return this;
  }

  empty() {
    return this.size() === 0;
  }

  size() {
    return this.stack.length;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  has(x) {
    return this.stack.indexOf(x) !== -1;
  }

  getArray() {
    return this.stack;
  }

  getRoot() {
    return this.stack[0];
  }

  print() {
    for(let s of [...this.stack]){
      if(s.print){
        console.log(`${s}：`);
        s.print();
      } else{
        console.log(s);
      }
    }

    return this;
  }
}

module.exports = Stack;
