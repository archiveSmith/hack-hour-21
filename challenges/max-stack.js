/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  const stack = {
    storage: [],
  };
  stack.push = function(data) {
    this.storage.unshift(data);
    return this.storage.length;
  };
  stack.pop = function() {
    return this.storage.shift();
  };
  stack.getMax = function() {
    return this.storage.reduce((acc, curr) => {
      if (curr > acc) acc = curr;
      return acc;
    });
  }

  return stack;
}

// const stackTest = Stack();
// console.log(stackTest.push(1));
// console.log(stackTest.push(2));
// console.log(stackTest.push(20));
// console.log(stackTest.push(3));
// console.log(stackTest.pop());
// console.log(stackTest.getMax());

module.exports = Stack;