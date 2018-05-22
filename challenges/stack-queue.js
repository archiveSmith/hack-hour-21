/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
    this.size = 0;
    this.storage = {};
    this.largest = -Infinity;
  
    this.push = item => {
      this.storage[this.size] = item;
      if (item > this.largest) this.largest = item;
      return (this.size += 1);
    };
  
    this.pop = () => {
      if (this.size === 0) return undefined;
      const toBeDeleted = this.storage[this.size - 1];
      delete this.storage[this.size - 1];
      if (this.largest === toBeDeleted) this.newMax();
      this.size -= 1;
      return toBeDeleted;
    };
  
    this.newMax = () => {
      this.largest = -Infinity;
      if (this.size > 0)
        for (let key in this.storage) {
          if (this.storage[key] > this.largest) this.largest = this.storage[key];
        }
    };
  
    this.getMax = () => (this.size === 0 ? undefined : this.largest);
  }
  
  /**
   * Queue Class
   */
  
  function Queue() {
    let stack1 = new Stack();
    let stack2 = new Stack();
  
    this.enqueue = item => stack1.push(item);
    this.dequeue = () => {
      while (stack1.size) stack2.push(stack1.pop());
      let val = stack2.pop();
      while (stack2.size) stack1.push(stack2.pop());
      return val;
    };
  }

module.exports = { Stack: Stack, Queue: Queue };
