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
  if (!l1) return l2;
  if (!l2) return l1;
  let alternator = false;
  const start = l1;
  let index = l1;
  let skip;
  while (index.next !== null) {
    if (alternator) {
      skip = index.next;
      index.next = l1;
      l2 = skip;
      index = index.next;
      alternator = !alternator;
    } else {
      skip = index.next;
      index.next = l2;
      l1 = skip;
      index = index.next;
      alternator = !alternator;
    }
  }
  if (alternator) {
    index.next = l1;
    index = index.next;
  } else {
    index.next = l2;
    index = index.next;
  }
  return start;
}

// let node1 = new Node(0);
// node1.next = new Node(1);
// node1.next.next = new Node(2);
// node1.next.next.next = new Node(3);
// let node2 = new Node(10);
// node2.next = new Node(11);
// node2.next.next = new Node(12);
// node2.next.next.next = new Node(13);

// zip(node1,node2);

module.exports = {Node: Node, zip: zip};
