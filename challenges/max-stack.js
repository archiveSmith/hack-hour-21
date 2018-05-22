/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */
class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }
  push(elm) {
    this.count += 1;
    this.storage[this.count] = elm;
  }
  pop() {
    if (this.count === 0)
      return undefined;
    this.count -= 1;
    const pops = this.storage[this.count];
    delete this.storage[this.count];
    return pops;
  }
  getMax() {
    let max = 0;
    const vals = this.storage;
    for (let prop in vals) {
      max = (max < parseFloat(vals[prop])) ? parseFloat(vals[prop]) : max;
    }
    return max;
  }
}




Stack.prototype.push(5);


module.exports = Stack;
