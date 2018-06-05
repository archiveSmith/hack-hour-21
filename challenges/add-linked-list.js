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

// total hack
Node.prototype.addNode = function push(val) {
  let currentNode = this;
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = new Node(val);
};

function addLinkedList(l1, l2) {
  function sumList(list) {
    let pow = 0;
    let sum = 0;
    let currentNode = list;
    while (currentNode.next) {
      pow += 1;
      currentNode = currentNode.next;
    }
    currentNode = list;
    while (currentNode) {
      sum += currentNode.value * (10 ** pow--);
      currentNode = currentNode.next;
    }
    return sum;
  }
  const summedString = String(sumList(l1) + sumList(l2));
  const summedList = new Node(Number(summedString[summedString.length - 1]));
  for (let i = summedString.length - 2; i >= 0; i--) {
    summedList.push(Number(summedString[i]));
  }
  return summedList;
}

module.exports = { Node: Node, addLinkedList: addLinkedList };
