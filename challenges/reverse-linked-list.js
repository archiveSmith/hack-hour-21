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

function reverseLinkedList(head, arr = []) {
  arr.push(head);

  if (head.next === null) {
    head.next = arr[arr.length - 2];
    console.log(arr);
    return head;
  }
  let tempNext = head.next;
  head.next = arr[arr.length - 2];
  head = tempNext;
  return reverseLinkedList(head, arr);
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
