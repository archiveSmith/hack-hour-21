/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.count = 0;
  this.storage = {};
}

Stack.prototype.push = function (elm) {
  this.storage[this.count] = elm;
  this.count += 1;
};

Stack.prototype.pop = function () {
  if (this.count === 0) return undefined;
  this.count -= 1;
  const pops = this.storage[this.count];
  delete this.storage[this.count];
  return pops;
};

Stack.prototype.getMax = function () {
  let max = 0;
  const vals = this.storage;
  for (let prop in vals) {
    max = (max < parseFloat(vals[prop])) ? parseFloat(vals[prop]) : max;
  }
  return max;
};




module.exports = Stack;
