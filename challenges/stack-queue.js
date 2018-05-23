/**
 * Create a stack.Then create a queue using two stacks.
 */

class Stack {
    constructor() {
        this.stor = {};
        this.idx = 0;
    }

    push(val) {
        this.stor[this.idx] = val
        this.idx += 1;
        return this.idx;
    }

    pop() {
        this.idx -=1;
        let tmp = this.stor[this.idx];
        delete this.stor[this.idx];
        return tmp;
    }

    getMax() { return Math.max(...Object.values(this.stor)) };
}


/**
* Queue Class
*/


class Queue {

    constructor() {
        this.stack1 = new Stack;
        this.stack2 = new Stack;
    }

    enqueue(val) {
        while (this.stack1.idx > 0) {
            this.stack2.push(this.stack1.pop());
        }
       
        this.stack1.push(val);

        while (this.stack2.idx > 0) {
            this.stack1.push(this.stack2.pop());
        }
    }

    dequeue() {
        if (this.stack1.idx === 0) {
            return undefined
        }
        return this.stack1.pop();
    }
}

let q = new Queue;
q.enqueue(1);
q.enqueue(2);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());

module.exports = {Stack: Stack, Queue: Queue};



