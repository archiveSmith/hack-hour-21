/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack(...vals) {
  this.storage = [...vals];
  this.push = (...pushVals) => this.storage.push(...pushVals);
}

/**
* Queue Class
*/

function Queue(stack1, stack2) {
  this.storage = [];
  for (let i = 0; i < stack1.storage.length; i++) {
    this.storage.unshift(stack1.storage[i]);
  }
  for (let i = 0; i < stack2.storage.length; i++) {
    this.storage.unshift(stack2.storage[i]);
  }
  this.enqueue = (...vals) => this.storage.unshift(...vals);
  this.dequeue = () => this.storage.shift();
  this.push = (...vals) => this.storage.unshift(...vals);
  this.pop = () => this.storage.shift();
}

// const newStack = new Stack();
// const newStack2 = new Stack();

// newStack.push(1);
// newStack.push(2);
// newStack.push(3);

// newStack2.push(4);
// newStack2.push(5);
// newStack2.push(6);

// const newQueue = new Queue(newStack, newStack2);

// newQueue.enqueue(7);
// newQueue.enqueue(8);

// console.log(newQueue);

module.exports = {Stack: Stack, Queue: Queue};
