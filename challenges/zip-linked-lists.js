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
 let l1NodesUsed = l1;
 let l2NodesUsed = l2;
 if (l1.next === null) return l2;
 if (l2.next === null) return l1;
}

module.exports = {Node: Node, zip: zip};
