/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}
//counter to keep track of which # node we are looking at in the LL
// for/while loop to access the this.next value until our counter equals k.
//once counter reaches k, we've found the node object we want and want to return this.value, which is actually its key?; Object.values('node')?
function kthToLastNode(k, head) {
  if (typeof k !== 'number' || typeof head !== 'object') return 'nice try';
  const counter = 0;
  currentNode = head;
  while (counter < k) {
    counter++;
    currentNode = currentNode.next;
  }
  return currentNode.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
