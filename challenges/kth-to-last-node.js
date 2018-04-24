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

function kthToLastNode(k, head) {
  const record = [];
  let place = head;
  while (place.next !== null) {
    record.push(place.value);
    place = place.next;
  }
  record.push(place.value);
  console.log(record);
  if (k > record.length) return -1;
  return record[record.length - k];
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
