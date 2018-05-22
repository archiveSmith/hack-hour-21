/**
 * Create a stack.Then create a queue using two stacks.
 */


class Stack {
    constructor() {
        this.count = 0;
        this.values = [];
    }

    push(val) {
        this.values[this.count++] = val;
    }

    pop() {
        if (!this.values.length) return undefined;
        let temp = this.values[this.count - 1];
        this.values.splice(--this.count, 1);
        return temp;
    }

    size() {
        return this.count;
    }
}




class Queue {
    constructor() {
        this.one = new Stack;
        this.two = new Stack;
        this.stackCount = 0;
    }

    enqueue(val) {
        this.one.push(val);
        this.stackCount++;
    }

    dequeue(val) {
        for (let i = 0; i < this.stackCount; i++) {
            this.two.push(this.one.pop())
        }
        this.stackCount--;
        let pop = this.two.pop();
        for (let j = 0; j < this.stackCount; j++) {
            this.one.push(this.two.pop())
        }
        return pop;
    }
}


module.exports = {Stack: Stack, Queue: Queue};

