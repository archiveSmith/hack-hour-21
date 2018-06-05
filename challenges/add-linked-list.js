/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let head, prev, current, currentA, currentB;
  if (!l1.next && !l2.next) return head;
  else {
    if (!head) {
      head = new Node(l1.value + l2.value);
      prev = head;
      l1 = l1.next;
      l2 = l2.next;
      return addLinkedList(l1, l2);
    }
    else {
      current = new Node(currentA.value + currentB.value);
      console.log(current);
      prev.next = current;
      prev = current;
      return current;
    }
  }
  return addLinkedList(l1, l2);
}

let l1A = new Node(2);
let l1B = new Node(1);
let l1C = new Node(5);
l1A.next = l1B;
l1B.next = l1C;

let l2A = new Node(5);
let l2B = new Node(9);
let l2C = new Node(2);
l2A.next = l2B;
l2B.next = l2C;

console.log(addLinkedList(l1A, l2A));

module.exports = {Node: Node, addLinkedList: addLinkedList};
