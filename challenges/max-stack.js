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

  Stack.prototype.push = (val) => {
    this.storage[this.count] = val;
    this.count++;
    return this.count;
  }

  Stack.prototype.pop = () => {
    if (this.count === 0) return undefined;

    this.count--;
    let popped = this.storage[this.count];
    delete this.storage[this.count];
    return popped;
  }

  Stack.prototype.getMax = () => {
    if (this.count === 0) return undefined;

    return Math.max(...this.storage);

  }
}
module.exports = Stack;