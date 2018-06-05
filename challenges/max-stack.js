/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.stack = []; // The actual stack data structure
  this.maxVal = []; // Helper data structure : keep track of sorted maxVals



  this.push = function(val) {
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
    this.maxVal.sort( (a,b) => a>b );

    return this.stack.length;

  }

  this.pop = function() {
    if (this.stack.length===0) return undefined;
    let retVal = this.stack.pop();

    // remove from and then sort our helper array
    let idx = this.maxVal.indexOf(retVal);
    this.maxVal.splice(idx,1);
    this.maxVal.sort( (a,b) => a > b );

    return retVal;
  }

  // return the value at top of the queue
  this.getMax = function() {
    // console.log(this.stack);
    // console.log(this.maxVal);
    return this.maxVal[this.maxVal.length - 1];
  }

}


// let s = new Stack();
// s.push(50);
// s.push(1);
// s.push(100);
// s.push(11);
// s.pop();
// s.pop();
// console.log(s.getMax());



module.exports = Stack;