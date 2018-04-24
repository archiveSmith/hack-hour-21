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
  let savedNodes = []; // save k nodes...
  let currentNode = head;
  let numNodes = 0;
  while ( currentNode !== null ) {
    numNodes++;
    savedNodes.push(currentNode); //save it
    console.log(savedNodes.length);
    if ( savedNodes.length > k){
      savedNodes.shift(); //we only want to keep k nodes...so remove the one from the front 
    }
    currentNode = currentNode.next;
  }

  if ( numNodes < k ) {
    return undefined; //because kth to the last doesn't exist.
  }

  return savedNodes[0].value; //the first item in our list is the kth to last node

}

// Test cases
// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// console.log(kthToLastNode(, a));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
