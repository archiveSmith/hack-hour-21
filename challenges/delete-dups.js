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
    this.val = val;
    this.next = null;
  }


function deleteDups(head) {
    let outerNode = head;
  let innerNode;

  while (outerNode && outerNode.next) {
    innerNode = outerNode.next;
    const value = outerNode.value;
    while (innerNode && innerNode.next) {
      if (value === innerNode.next.value) {
        if(innerNode.next.next) {
          innerNode.next = innerNode.next.next;
        } else {
          innerNode.next =null;
        }
      } 
      innerNode = innerNode.next;
      
      
    }
    outerNode = outerNode.next;
  }
  return head;
}

module.exports = deleteDups;
