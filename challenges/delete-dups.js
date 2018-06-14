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

var Node = function(value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
  if (!head || !head.next) return head;
  let currentNode = head;
  let compareNode = head.next;
  let chaser = currentNode;
  while (currentNode.next) {
    while (compareNode) {
      // check inner loop node against outer loop node
      if (currentNode.value === compareNode.value) {
        // what if dupes are at the end?
        if (!compareNode.next) chaser.next = null;
        // drop the dupe and don't advance the chaser
        else chaser.next = compareNode.next;
      } else chaser = chaser.next;
      compareNode = compareNode.next;
    }
    currentNode = currentNode.next;
    compareNode = head;
    chaser = head;
  }
  return head;
}

module.exports = deleteDups;
