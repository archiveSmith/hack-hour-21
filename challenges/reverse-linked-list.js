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
  this.previous = null;
}

function reverseLinkedList(head, oldHead) {
  if (!head) return null;
  head.previous = oldHead;
  if (head.next === null) {
    head.next = head.previous;
    head.previous = null;
    return head;
  }
  let tempNext = head.next;
  head.next = head.previous;
  head.previous = tempNext;
  oldHead = head;
  head = tempNext;
  return reverseLinkedList(head, oldHead);
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
