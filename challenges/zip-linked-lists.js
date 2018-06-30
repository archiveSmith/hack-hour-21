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
  let l1Node = l1.next;
  let curr1 = l1;
  while(l1Node !== null && l2 !== null){
    curr1.next = l2
    curr1.next.next= l1Node;
    l1Node = l1Node.next;
    curr1 = curr1.next.next;
    l2 = l2.next
  }
 if(l1Node === null){
   curr1.next = l2;
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
// l2.next.next.next = new Node(7);s


// console.log(JSON.stringify(zip(l1,l2)));


  


module.exports = {Node: Node, zip: zip};
