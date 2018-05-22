/**
 * Create a stack.Then create a queue using two stacks.
 */


/**
 *  Stack is the LIFO
 */

function Stack() {
  // body...
  this.stack = []; // The actual stack data structure
  this.maxVal = []; // Helper data structure : keep track of sorted maxVals



  this.push = function (val) {
    this.stack.push(val);

    if (this.maxVal.length === 0) {
      this.maxVal.push(val);
      return this.stack.length;
    }

    // if (val>=this.maxVal[this.maxVal.length-1]) {
    //   this.maxVal.push(val);
    //   this.maxVal=val; // update maxVal
    // }

    this.maxVal.push(val);
    this.maxVal.sort((a, b) => a > b);

    return this.stack.length;

  }

  this.pop = function () {
    if (this.stack.length === 0) return undefined;
    let retVal = this.stack.pop();

    // remove from and then sort our helper array
    let idx = this.maxVal.indexOf(retVal);
    this.maxVal.splice(idx, 1);
    this.maxVal.sort((a, b) => a > b);

    return retVal;
  }

  // return the value at top of the queue
  this.getMax = function () {
    // console.log(this.stack);
    // console.log(this.maxVal);
    return this.maxVal[this.maxVal.length - 1];
  }

}




/**
* Queue Class
* FIFO
*
* 1,2,3,4,5
*
*/


function Queue() {
  let stackA = new Stack();
  let stackB = new Stack();

  let lastOp = "enqueue";

  // Always add to stackA
  this.enqueue = function (val) {
    if (lastOp !== "enqueue") {
      this.transfer(stackB, stackA);
    } 
    stackA.push(val);
  }

  // transfer stackA to stackB, then pop off the top, then 
  this.dequeue = function () {
    if (lastOp !== "dequeue") {
      this.transfer(stackA, stackB);
    }
    return stackB.pop();
  }

  // 
  this.transfer = function (src, dest) {
    let val = src.pop();
    while (val !== undefined ) {
      dest.push(val);
      val = src.pop();
    }
  }

}

// let q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
// q.enqueue(4);
// console.log(q.dequeue());



module.exports = {Stack: Stack, Queue: Queue};
