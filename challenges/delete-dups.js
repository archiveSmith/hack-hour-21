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

function Node (val) {
  this.value = val;
  this.next = null;
}

function deleteDups(head) {
  let seen = {};
  let nextNode = head;
  let prevNode = null;
  let savedNext;
  while (nextNode){
    if (seen[nextNode.value]) { // if we have already seen it
      // remove it by adjusting the pointers
      prevNode.next = nextNode.next;
      // make sure the remove node doesn't ref any other nodes so it can be garbage collected 
      nextNode.next = null;

      // set it up for the next iteration 
      nextNode = prevNode.next;
    } else {
      seen[nextNode.value] = 'hi';

      // set it up for the next iteration
      prevNode = nextNode; // save this node
      nextNode = nextNode.next;
    }

  }

  return head;

}

// let h = new Node(2);
// h.next = new Node(2);
// h.next.next = new Node(3);

// console.log(deleteDups(h));

module.exports = deleteDups;
