/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 */
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
 
a.next = b;
b.next = c;
c.next = d;
d.next = e;
  
function Node(val) {
  this.value = val;
  this.next = null;
}

console.log(a);
function kthToLastNode(k, head) {
  let current = head;
  let counter = 0;
  // console.log(current.next);
  // while (current.next !== null) {
  //   current = current.next;
  //   counter += 1;
  //   console.log(counter);
  // }

  // current = head;
  console.log(current);
  for (let i = 0; i <= 4 - k; i += 1) {
    current = current.next;
  }

  return current.value;
}

kthToLastNode(2, a);// -> returns 'D' (the value on the second to last node)

module.exports = { Node, kthToLastNode };

