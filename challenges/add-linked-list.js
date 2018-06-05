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

function addLinkedList(l1, l2, carried = 0, nlHead = new Node(0), nlCurrent = nlHead) {
  // console.log(l1);
  // console.log(l2);
  // if there are no more nodes, check for carried over 1 and add it if neccessary and return new linked list
  if (l1 === null && l2 === null && !carried) return nlHead;
  if (l1 === null && l2 === null) {
    nlCurrent.next = new Node(1);
    return nlHead;
  }
  // add the two current nodes, retrain the carried over 1s
  const added = l1.value + l2.value + carried;
  if (carried > 0) carried = 0;
  if (added < 10) nlCurrent.value = added;
  else {
    nlCurrent.value = added - 10;
    carried = 1;
  }
  if (l1.next || l2.next || carried) nlCurrent.next = new Node(0);
  // recurse through with nexts
  return addLinkedList(l1.next, l2.next, carried, nlHead, nlCurrent.next)
}

// let a1 = new Node(2);
// let a2 = new Node(1);
// let a3 = new Node(5);
// a1.next = a2;
// a2.next = a3;

// let b1 = new Node(5);
// let b2 = new Node(9);
// let b3 = new Node(2);
// b1.next = b2;
// b2.next = b3;

// console.log(addLinkedList(a1, b1));


module.exports = {Node: Node, addLinkedList: addLinkedList};
