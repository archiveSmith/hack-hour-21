/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack(...vals) {
  this.storage = [];
  this.sorted = [...vals];
  this.length = 0;
  this.sorted.sort();
}

Stack.prototype.push = function push(...vals) {
  const self = this;
  vals.forEach((e) => {
    self.storage[self.length] = e;
    self.length += 1;
    self.sorted.push(e);
  });
  this.sorted.sort();
  return this.length;
};

Stack.prototype.pop = function pop() {
  const popped = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length -= 1;
  this.sorted.splice(this.sorted.indexOf(popped), 1);
  return popped;
};

Stack.prototype.getMax = function getMax() {
  return this.sorted[this.sorted.length - 1] === undefined ?
    -Infinity :
    this.sorted[this.sorted.length - 1];
};

module.exports = Stack;