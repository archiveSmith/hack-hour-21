/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.stack = [];
  this.length = 0;
  this.maxValue = [-Infinity, -Infinity]
}

const push = (value) => {
  stack.stack[stack.length] = value;
  stack.length ++;
  return stack.length;
}

const pop = () => {
  
}

const getMax = () => (Stack.stack.sort((a, b) => b > a)[0])

module.exports = Stack;