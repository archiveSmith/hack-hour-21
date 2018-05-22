/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
    this.storage = [];
    this.count = this.storage.length;
    
    this.push = (val) => {
        this.storage[this.count] = val;
        this.count++;
        return this.count;
    }
  
    this.pop = () => {
        if (this.count === 0) return undefined;
        this.count--;
        let popped = this.storage[this.count];
        this.storage.splice(-1, 1);
        return popped;
    }
  
  }
  
  /**
  * Queue Class
  */
  
  function Queue() {
    let incoming = new Stack();
    let outgoing = new Stack();
  
      //enque
    this.enqueue = (val) => {
        incoming.push(val);
    };
  
    //deque
    this.dequeue = () => {
      if (outgoing.count === 0) {
          while (incoming.count) {
              outgoing.push(incoming.pop());
          }
          let dequeued = outgoing.pop();
          while (outgoing.count){
            incoming.push(outgoing.pop())
          }
        return dequeued;
      };
    };
      
  }

module.exports = {Stack: Stack, Queue: Queue};
