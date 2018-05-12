/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.size = 0;
  this.storage = {};
  this.largest = -Infinity;

  Stack.prototype.push = item => {
    this.storage[this.size] = item;
    if (item > this.largest) this.largest = item;
    return (this.size += 1);
  };

  Stack.prototype.pop = () => {
    if (this.size === 0) return null;
    const toBeDeleted = this.storage[this.size - 1];
    if (this.largest === toBeDeleted) {
      delete this.storage[this.size - 1];
      this.largest = -Infinity;
      if (this.size > 0) for (let key in this.storage) {
        if (this.storage[key] > this.largest) this.largest = this.storage[key];
      }
    } else delete this.storage[this.size - 1];
    this.size -= 1;
    return toBeDeleted;
  };
  
  Stack.prototype.getMax = () => this.largest;
}

module.exports = Stack;
