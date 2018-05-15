/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {

  // if head is undefined or null
  if ( !head ) return undefined;

  // if the linked list only has one node
  if ( !head.next ) return head; 


  // Handle the head as a special case
  let currentNode = head;
  let nextNode = currentNode.next; // save this
  let nextNextNode;

  head.next = null; // b/c the head is now the tail and won't point to anything

  while ( nextNode ) {
    nextNextNode = nextNode.next; // save it
    nextNode.next = currentNode; // reassign the pointer

    // set this up for the next iteration
    currentNode = nextNode;
    nextNode = nextNextNode;
  }

  // need to return the new head
  return currentNode;

}

// let h = new Node('a');
// h.next = new Node('b');
// h.next.next = new Node("c");

// console.log(reverseLinkedList(h));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
