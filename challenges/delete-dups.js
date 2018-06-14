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

function Node(val) {
  this.value = val;
  this.next = null;
}

function deleteDups(head) {
  if (head.next === null) return head;
  const start = head;
  let place = head;
  let check = head;
  while (place.next !== null) {
    while (check !== null && check.next !== null) {
      if (check.next.value === place.value) {
        // Remove check.next
        check.next = check.next.next;
      } else check = check.next;
    }
    place = place.next;
    check = place;
  }
  return start;
}

// const list = new Node(3);
// list.next = new Node(2);
// list.next.next = new Node(1);
// list.next.next.next = new Node(3);
// list.next.next.next.next = new Node(2);
// list.next.next.next.next.next = new Node(3);

// console.log(deleteDups(list));

module.exports = deleteDups;
