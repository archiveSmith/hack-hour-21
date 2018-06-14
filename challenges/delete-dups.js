/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
const a = new Node('A');
const b = new Node('B');
const c = new Node('B');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;


function deleteDups(head) {
  let curr = head;
  while (curr.next) {
    if (curr.value === curr.next.value) {
      curr = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return JSON.stringify(head);
}

module.exports = deleteDups;
