/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
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


let s = new Stack;


console.log(s.push(33));
console.log(s)
console.log(s.push(2));
console.log(s)
console.log(s.pop());
console.log(s.push(9));
console.log(s)
console.log(s.getMax());


module.exports = Stack;

