/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = [];
  this.length = 0;
  this.max = [];

  // body...
}

Stack.prototype.push = function(value) {
  this.storage[this.length] = value;
  this.length += 1;
  let temp = this.storage.slice()
  this.max = temp.sort(function(a, b){return a - b});
  return this.length;  
}

Stack.prototype.pop = function(){
  const output = this.storage[this.length-1];
  this.storage[this.length-1] = undefined;
  this.lenbgth -=1
  let temp = this.storage.slice()
  this.max = temp.sort(function(a, b){return a - b});
  return output;
}

Stack.prototype.getMax = function(){
  let max = 0;
  this.storage.forEach(x => {
    if(x > this.max) max = x;
  })
  return max;
}

Stack.prototype.getMaxone = function(){
  return this.max[this.length-1];
}



let stack = new Stack()
stack.push(3);
stack.push(7);
stack.push(5);
stack.push(9);
stack.push(6);
stack.push(6);

console.log(stack);



module.exports = Stack;