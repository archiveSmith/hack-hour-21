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
  if (!l1 && !l2) return undefined;
  let carry = 0;
  let output = new Node(0);
  let first = output;
  while (l1 && l2) {
    let sum = carry + l1.value + l2.value;
    if (carry) carry = 0;
    if (sum > 9) {
      carry = 1;
      sum -= 10;
    }
    output.value = sum;
    if (l1.next && l2.next) {
      output.next = new Node(0);
      output = output.next;
      l1 = l1.next;
      l2 = l2.next;
    } else if (carry) {
      output.next = new Node(1);
      l1 = l1.next;
      l2 = l2.next;
    } else {
      l1 = l1.next;
      l2 = l2.next;
    }
  }
  return first;
}

// const l1 = new Node(1);
// l1.next = new Node(8);
// l1.next.next = new Node(7);
// const l2 = new Node(5);
// l2.next = new Node(3);
// l2.next.next = new Node(1);

// const sum = addLinkedList(l1, l2);
// console.log(sum);
// console.log(sum.next);
// console.log(sum.next.next);
// console.log(sum.next.next.next);

module.exports = {Node: Node, addLinkedList: addLinkedList};
