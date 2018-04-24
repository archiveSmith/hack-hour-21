/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let count = 1;
  const getLast = (node) => {
    count++;
    if (node.next) {
      let nextNode = node.next;
      return getLast(nextNode);
    } else {
      return count;
    }
  }
  
  let last = getLast(head);
  
  let nextCount = 0;
  let desired = last - k;
  
  const get = (node) => {
    if (desired <= 0) {
      return undefined;
    }
    nextCount++;
    if (nextCount === desired) {
      return node.value;
    } else {
      if (node.next) {
        let nextNode = node.next;
        return get(nextNode);
      }
      else { return undefined; }
    }
   }
   return get(head);
  }
  



module.exports = {Node: Node, kthToLastNode: kthToLastNode};
