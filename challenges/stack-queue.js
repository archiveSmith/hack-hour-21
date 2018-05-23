/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack(stuff) {
  let stack = [];
  function push() {
    stack.push(stuff);
    return stack;
  }
  function pop(num){
    stack = stack.pop(num);
    return stack;
  }
  return stack;
}


/**
* Queue Class
*/


function Queue(stack1, stack2) {
  let queue = [];
  if (stack1.length || stack2.length < 1){
    return undefined;
  }
  else {
    function enqeue(){
      queue.push(stack1);
      queue.push(stack2);
      return queue;
    }
    function deqeue(num){
      queue.shift(num);
      return queue;
    }
    return queue;
  }

}

module.exports = {Stack: Stack, Queue: Queue};
