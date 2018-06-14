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

const Node = function(value) {
    this.value = value;
    this.next = null;
}

function deleteDups(head) {
  if (head === null || head.next === null) return head;
  let curr = head;

  while( curr.next !== null ) {
      if (curr.value == curr.next.value) curr.next = curr.next.next;
      else curr = curr.next
  }
  return head;
}

module.exports = deleteDups;
