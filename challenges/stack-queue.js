/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.contents = [];
  this.length = 0;
};

Stack.prototype.push = function(value) {
  this.contents[this.length] = value;
  return this.length++;
};

Stack.prototype.pop = function() {
  let removed = this.contents[--this.length];
  this.contents.splice(this.length, 1);
  return removed;
};


/**
* Queue Class
*/


function Queue() {
  this.estack = new Stack();
  this.dstack = new Stack();
};

Queue.prototype.enqueue = function(value) {
  this.estack.push(value);
};

Queue.prototype.dequeue = function(value) {
  if (!this.estack.length && !this.dstack.length) return undefined;
  if (!this.dstack.length) {
    while (this.estack.length) {
      this.dstack.push(this.estack.contents[i]);
    }
    return this.dstack.pop(); 
  };
};

module.exports = {Stack: Stack, Queue: Queue};
