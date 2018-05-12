/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  
  let l1Nodes = [];
  let l2Nodes = [];
  
  if (l1.value) {
    while (l1 !== null) {
      l1Nodes.push(l1);
      l1 = l1.next;
    }
    while (l2 !== null) {
      l2Nodes.push(l2);
      l2 = l2.next;
    }
  }

  let longest = l1Nodes.length > l2Nodes.length ? l1Nodes : l2Nodes;
  let l3;
  let current;

  for (let i = 0; i < longest.length; i++) {
    if (i === 0) {
      l3 = l1Nodes[i];
      l3.next = l2Nodes[i];
      current = l3.next;
    } else {
      current.next = l1Nodes[i]
      current = current.next;
      current.next = l2Nodes[i]
      current = current.next;
    }
  }

  return l3;
};

module.exports = {Node: Node, zip: zip};


let l1 = new Node(5);
l1.next = new Node(4);
// l1.next.next = new Node(3);

// let l2 = new Node(2);
// l2.next = new Node(1);
// l2.next.next = new Node(0);

console.log(l1)
// console.log(zip(l1, l2))