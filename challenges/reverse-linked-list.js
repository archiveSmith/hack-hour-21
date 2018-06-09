/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {

  const vals = [];
  let curVal = head.value;
  while(curVal) {
    vals.push(curVal);
    curVal = curVal.next;
  }

  const node = Node();
  for (let i = 0; i < vals.length; i += 1) {
    const reversedIndex = vals.length - 1 - i;
    const reversedVal = vals[reversedIndex];
  }
  return node;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
