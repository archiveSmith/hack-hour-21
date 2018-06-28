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
  let l1Node = new Node(l1.next);
  let l2Node = new Node(l2.next);
  let curr1 = l1;
  let curr2 = l2;
  while(l1Node !== null || l2Node !== null){
    curr1.next = curr2
    curr1.next.next= l1Node;
    l1Node = l1Node.next;
    // l2Node = l2Node.next;
    curr1 = curr1.next.next;
    curr2 = l2Node;
    l2Node = l2Node.next;
  }
 if(l1Node === null){
   curr1.next = l2Node;
 }else{
   curr1.next = l1Node;
 }
 return l1;   
  }
// let l1 = new Node(2);
// l1.next = new Node(4);
// l1.next.next = new Node(6);
// l1.next.next.next = new Node(8);

// let l2 = new Node(1);
// l2.next = new Node(3);
// l2.next.next = new Node(5);
// l2.next.next.next = new Node(7);

// console.log(zip(l1,l2));


  


module.exports = {Node: Node, zip: zip};
