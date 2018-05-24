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
  while(l1.head.value !== null && l2.head.value !== null){
    let newNode = new Node(l1.head.value);
    newNode.next = l2.head;
    l1.h
    
  }
  // this.head = null;
  // this.tail = null;
  // while(this.tail.next !== l2.tail)
  // if(this.head === null){
  //   let newNode = new Node(l1.head.value);
  //   newNode.next = l2.head
  //   this.head = newNode;
  //   this.tail = newNode;
  // } else{
  //   let nextNode = new Node(l2.head.value)
  //   nextNode.next = l1.head.next
  //   this.tail = nextNode


    
  }
  //while this.next is not null, keeping zipping

  


module.exports = {Node: Node, zip: zip};
