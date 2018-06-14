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



function deleteDups(head) {
  let currentNode = prevNode = head;
  let cache = {}
  while (currentNode !== null) {
    if (!cache[head.value]) {
      cache[head.value] = 1;
      prevNode = currentNode;
      currentNode = currentNode.next;
    } else {
      prevNode.next = currentNode.next;
      currentNode = currentNode.next;
    }
  }
}

module.exports = deleteDups;
