/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = [];
  this.size = 0;
}

Stack.prototype.push = function (elm) {
  this.size += 1;
  this.stack.push(elm);
};

Stack.prototype.pop = function () {
  this.size -= 1;
  return this.stack.pop();
};


/**
* Queue Class
*/


function Queue() {
  this.pushS = new Stack();
  this.popS = new Stack();
}

Queue.prototype.enqueue = function (elm) {
  this.size += 1;
  this.pushS.push(elm);
};

Queue.prototype.dequeue = function () {
  if (this.pushS.length === 0) {
    if (this.popS.length === 0) {
      return 'done';
    }
    while (this.popS.length > 0) {
      let x = this.popS.pop();
      this.pushS.push(x);
    }
  }
  return this.popS.pop();
};


module.exports = {Stack: Stack, Queue: Queue};
