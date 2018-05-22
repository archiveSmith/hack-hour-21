/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.store = [];
  this.push = function (data) {
    this.store.push(data);
  };
  this.pop = function (data) {
    return this.store.pop();
  }
}


/**
* Queue Class
*/


function Queue() {
  this.in = new Stack();
  this.out = new Stack();
  this.queue = function (data) {
    this.in.push(data);
  };
  this.dequeue = function (data) {
    if (this.in.store.length === 0 && this.out.store.length === 0) return undefined;
    if (this.out.store.length > 0) {
      return this.out.pop();
    } else {
      while(this.in.store.length > 0) {
        this.out.push(this.in.pop());
      }
      return this.out.pop();
    }
  };
}

// const q = new Queue();
// q.queue(1);
// q.queue(2);
// q.queue(3);
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());

module.exports = {Stack: Stack, Queue: Queue};
