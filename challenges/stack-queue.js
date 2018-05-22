/**
 * Create a stack. Then create a queue using two stacks.
 * 
 *
 * [DONE] should have a push and pop method
 * [DONE] should push elements to stack
 * [DONE] should return undefined when popping empty stack
 * [DONE] should have enqueue and dequeue method
 * 
 * [TODO] should push elements to queue
 * [TODO] should return undefined when popping empty queue
 * [TODO] should pop most recently pushed elements

 */

function Stack() {
  const _stack = [];
  return {
    push: (...items) => {
      _stack.push(...items);
    },
    pop: () => {
      return _stack.pop();
    },
    enqueue: () => {},
    dequeue: () => {}
  };
}

/**
 * Queue Class
 */

function Queue() {
  return [Stack(), Stack()];
}

module.exports = { Stack, Queue };
