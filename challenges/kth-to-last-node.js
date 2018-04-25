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
  this.previous = null;
}

function kthToLastNode(k, head) {
  let lastNode = head;
  let tempNode = head;
  while (lastNode.next) {
    tempNode = lastNode;
    lastNode = lastNode.next;
    lastNode.previous = tempNode;
  }
  for (let i = 0; i < k - 1; i += 1) {
    lastNode = lastNode.previous
  }
  if (lastNode) return lastNode.value
  return undefined;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
