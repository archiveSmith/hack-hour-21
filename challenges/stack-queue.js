/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.contents = [];
  this.length = 0;
}

Stack.prototype.push = function(value) {
  this.contents[this.length] = value;
  return this.length++;
}

Stack.prototype.pop = function() {
  let removed = this.contents[--this.length];
  this.contents.splice(this.length, 1);
  return removed;
}


/**
* Queue Class
*/


function Queue() {
  this.enqueue = new Stack();
  this.dequeue = new Stack();
}

Queue.prototype.enqueue = function(value) {
  this.enqueue.push(value);
}

Queue.prototype.dequeue = function(value) {
  if (!this.enqueue.length && !this.dequeue.length) return 'error';
  if (!this.dequeue.length) {
    let i = this.enqueue.length;
    while (this.enqueue.length) {
      this.dequeue.push(this.enqueue.contents[i]);
      i--;
    }
    return this.dequeue.pop()
  }
}

module.exports = {Stack: Stack, Queue: Queue};
