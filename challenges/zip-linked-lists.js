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
  // connect .next to the next node in opposite list
  // connect .next of squeezed in node to be old .next of original node
  let temp;
  let temp2;
  let nextNode1 = l1;
  let nextNode2 = l2;
  
  while (nextNode1 && nextNode2) {
    temp = nextNode1.next;
    nextNode1.next = nextNode2;
    temp2 = nextNode2.next;
    nextNode2.next = temp;

    nextNode1 = temp;
    nextNode2 = temp2;
  }
};

module.exports = {Node: Node, zip: zip};
