/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.count = 0;
  this.storage = {};
}

Stack.prototype.push = function(val) {
  this.storage[this.count] = val;
  this.count ++;
}

Stack.prototype.pop = function() {
  if (this.count === 0) {
    return undefined;
  }
  this.count --;
  let result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
}

Stack.prototype.getMax = function() {
  let max = this.storage.reduce(function(a, b) {
    return Math.max(a, b);
  });
  return max;
}

module.exports = Stack;