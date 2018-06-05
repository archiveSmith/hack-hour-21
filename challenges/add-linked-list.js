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

function Node(value, next = null) {
  return { value, next }
}

function addLinkedList() {
  const summation = Node(0);

  let addNext = [...arguments].filter(val => !!val);
  let itterator = summation;

  while (addNext.length > 0) {

    const localSum = addNext.reduce((sum, cur) => sum += cur.value, 0);
    const totalSum = localSum + itterator.value; // includes any carryover, if applicable
    const remainder = totalSum % 10;
    const carry = Math.floor(totalSum / 10);

    itterator.value = remainder;

    addNext = addNext.map(val => val.next).filter(val => !!val);

    if (addNext.length > 0 || carry > 0) {
      itterator.next = Node(carry);
      itterator = itterator.next;
    }

  }
  return summation;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
