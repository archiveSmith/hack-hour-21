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
  if (l1.length === 0) return l2;
  if (l2.length === 0) return l1;
  l1.head.next = l2.head;
  for (let i = ; i < l1.length; i++) {
    l1
  }
};

module.exports = {Node: Node, zip: zip};
