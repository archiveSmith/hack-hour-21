/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.s = [];
};
Stack.prototype.push = function(value) {
  if (this.s){
    let neww = (this.s).concat(value);
    this.s = neww;
    console.log(this.s);
    return this.s.length;
    } else{this.s = [value];
    return this.s.length;
    };
}
Stack.prototype.pop = function (value) {
  return  this.s[this.s.length-1];
}
Stack.prototype.getMax = function() {
  let newArray =  this.s.slice();
    Array.sort(newArray);
    return newArray[newArray.length - 1];
}
  // Stack.prototype = {
  // push: (value) => {
  //   if (this.s){
  //   let neww = (this.s).concat(value);
  //   this.s = neww;
  //   console.log(this.s);
  //   return this.s.length;
  //   } else{this.s = [value];
  //   return this.s.length;
  //   };
  // },
  // pop : (value) => {
  //   return  this.s[this.s.length-1];
  // },
  // getMax: () => {
  //   let newArray =  this.s.slice();
  //   Array.sort(newArray);
  //   return newArray[newArray.length - 1];
  // }
  // body...

module.exports = Stack;