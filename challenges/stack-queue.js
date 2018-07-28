/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
    this.storage = [];
    this.index = 0;
}
Stack.prototype.push = (value) => {
    this.storage[this.index] = value;
    this.index += 1;
}

Stack.prototype.pop = () => {
    let output = this.storage[this.index - 1];
    this.storage[this.index-1] = undefined;
    this.storage -= 1;
    return output;
}

/**
* Queue Class
*/

function Queue() {
    let stack1 = new Stack();
    let stack2 = new Stack();
    this.index = 0;
}

Queue.prototype.enqueue = (value) => {
    if(stack2.index > 0){
        for(let i = this.index-1; i > 0; i--){
            stack1.push(stack2[i]);
        }
        stack2 = [];
    }
    stack1.push(value);
    this.index += 1;
}


Queue.prototype.dequeue = () => {
    if(stack1.index > 0){
        for(let i = stack1.length-1; i >= 0; i--){
            stack2.push(stack1[i]);
        }
        stack1 = [];
        return stack2.pop();
    }
    return undefined;
}

module.exports = {Stack: Stack, Queue: Queue};
