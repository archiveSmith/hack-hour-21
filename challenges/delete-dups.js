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

// function Node(val) {
//   this.value = val;
//   this.next = null;
// }

function deleteDups(head) {
  let currentNode = prevNode = head;
  let cache = {}
  while (currentNode !== null) {
    if (!cache[currentNode.value]) {
      cache[currentNode.value] = 1;
      prevNode = currentNode;
      currentNode = currentNode.next;
    } else {
      prevNode.next = currentNode.next;
      currentNode = currentNode.next;
    }
  }
  return head;
}

// const node1 = new Node(1)
// const node2 = new Node(2)
// const node3 = new Node(3)
// const node4 = new Node(4)
// const node5 = new Node(5)
// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

// console.log(deleteDups(node1));

module.exports = deleteDups;
