/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack(length, max, stack) {
  // body...
  this.length = length;
  this.max = max;
  this.stack = stack;
}

Stack.prototype.push = (el) => {
  if (!this.length) this.length = 0;
  if (!this.stack) this.stack = []
  if (!this.max) this.max = 0;
  if (el > this.max) this.max = el;
  this.stack[this.length] = el;
  this.length++;
  return this.length;
}

Stack.prototype.pop = () => {
  this.length--;
  let popped = this.stack[this.length];
  let isMax = false;
  if (this.max === popped) isMax = true;
  this.stack = this.stack.slice(0, this.length)
  if (isMax) this.max = Math.max(...this.stack); 
  return popped;
}

Stack.prototype.getMax = () => {
  if (this.length === 0) return undefined;
  return this.max;
}

module.exports = Stack;

let stacky = new Stack();

// console.log(stacky.getMax());
// console.log(stacky.push(10));
// console.log(stacky.push(11));
// console.log(stacky.push(12));
// console.log(stacky.getMax())
// console.log(stacky.pop());
// console.log(stacky.getMax())
// console.log(stacky.pop());
// console.log(stacky.getMax())
// console.log(stacky.pop());
// console.log(stacky.getMax())