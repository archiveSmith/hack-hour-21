/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.contents = [];
  this.length = 0;
}

Stack.prototype.push = function(value) {
  this.contents[this.length] = value;
  this.length++;
  return this.length;
};

Stack.prototype.pop = function(value) {
  let lastIndex = this.length - 1;
  let removed = this.contents[lastIndex];
  this.contents.splice(lastIndex,1);
  this.length--;
  return removed;
};

Stack.prototype.getMax = function(value) {
  if (this.length === 0) return undefined;
  let max = 0;
  for (let i = 0; i < this.length; i++) {
    if (this.contents[i] >= max) max = this.contents[i];
  }
  return max;
};

module.exports = Stack;