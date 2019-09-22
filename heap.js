class Heap {
  constructor(iLarge = true){
    this.heap = new Array();
    this.isLarge = iLarge;
  }

  swap(id1, id2) {
    let temp = this.heap[id1];
    this.heap[id1] = this.heap[id2];
    this.heap[id2] = temp;
  }

  up(id) {
    let pid = Math.floor((id - 1) / 2);

    if(this.isLarge){
      if(id !== 0 && this.heap[pid] < this.heap[id]){
        this.swap(pid, id);
        this.up(pid);
      }
    } else {
      if(id !== 0 && this.heap[pid] > this.heap[id]){
        this.swap(pid, id);
        this.up(pid);
      }
    }
  }

  down(id) {
    let leftChildId = id * 2 + 1;
    let rightChildId = id * 2 + 2;
    let len = this.heap.length;

    if(this.isLarge){
      if(leftChildId < len && this.heap[leftChildId] > this.heap[id]){
        this.swap(leftChildId, id);
        this.down(leftChildId);
      }

      if(rightChildId < len && this.heap[rightChildId] > this.heap[id]){
        this.swap(rightChildId, id);
        this.down(rightChildId);
      }
    } else {
      if(leftChildId < len && this.heap[leftChildId] < this.heap[id]){
        this.swap(leftChildId, id);
        this.down(leftChildId);
      }

      if(rightChildId < len && this.heap[rightChildId] < this.heap[id]){
        this.swap(rightChildId, id);
        this.down(rightChildId);
      }
    }
  }

  insert(x) {
    this.heap.push(x);
    this.up(this.heap.length - 1);
  }

  remove(){
    this.swap(0, this.heap.length - 1);
    const ret = this.heap.pop();

    this.down(0);

    return ret;
  }

  pop(){
    return this.heap.pop();
  }

  getRoot(){
    return this.heap[0]
  }

  getLength(){
    return this.heap.length;
  }
}
