/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let current = l1.head;
  let node = new Node(current.value);
  node.next = new Node(l2.head.value);
  
  current = new Node()
  node.next = l2.head;
  
  while(current){

  

  }
  






};

module.exports = {Node: Node, zip: zip};
