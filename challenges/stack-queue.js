/**
 * Create a stack.Then create a queue using two stacks.
 */


class Stack {
    constructor() {
      this.length = 0;
      this.store = {};
      this.max = {
        index: 0,
        value: -Infinity,
      };
    }
  
    setNewMax() {
      for (let i in this.store) {
        if (this.store[i] > this.max.value) {
          this.max.value = this.store[i];
          this.max.index = i;
        }
      }
    }
  
    resetMax() {
      this.max.value = -Infinity;
      this.max.index = -1;
    }
  
    push(val) {
      if (val > this.max.value) {
        this.max.index = this.length;
        this.max.value = val;
      }
      this.store[this.length++] = val;
      return this.length;
    }
  
    pop() {
      if (!this.length) return undefined;
      const popped = this.store[--this.length];
      if (popped === this.max.value) this.resetMax(); 
      delete this.store[this.length];
      this.setNewMax();
      return popped;
    }
  
    getMax() {
      return this.length === 0
        ? undefined
        : this.max.value;
    }
  }


/**
* Queue Class
*/

function Queue() {
  var Stack1 = [];
  var Stack2 = [];
}

function enqueue(element) {
  Stack1.push(element);
}

function dequeue() {
  if (Stack2.length === 0) {
    if (Stack1.length === 0) { return undefined; }
    while (Stack1.length > 0) {
      var p = Stack1.pop();
      Stack2.push(p);
    }
  }
  return Stack2.pop();
}

module.exports = {Stack: Stack, Queue: Queue};
