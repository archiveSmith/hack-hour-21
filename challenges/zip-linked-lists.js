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
  while(l1.value !== null && l2.value !== null){
    let newNode = new Node(l2.value);
    newNode.next = l1.next;
    l1.next = newNode;
    l2 = l2.next;
    l1 = newNode.next;
  }
  if(l1.value === null) {
    l1.next = l2;
  }


    
  }
  //while this.next is not null, keeping zipping

  


module.exports = {Node: Node, zip: zip};
