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


// Doing this in place
function zip(l1, l2) {
  if ( l1 === undefined && l2 === undefined ) return undefined;
  if ( l1 === undefined ) return l2;
  if ( l2 === undefined ) return l1;

  let zippedList = l1;
  let l1CurrentNode = l1;
  let l2CurrentNode = l2;
  let l1SavedNext = l1.next;
  let l2SavedNext = l2.next;  

  // walk both nodes...and when one does not have a next, we are 'done'
  
  while ( l1CurrentNode && l2CurrentNode ) {
    // do a zip of an l1 node and an l2 node
    l1CurrentNode.next = l2CurrentNode;
    l2CurrentNode.next = l1SavedNext;

    // console.log(l1CurrentNode.value);
    // console.log(l2CurrentNode.value);

    // set up for the next zip
    // grab the next nodes in each list
    l1CurrentNode = l1SavedNext;
    l2CurrentNode = l2SavedNext;

     // save their next pointers
    if (l1SavedNext) {
      l1SavedNext = l1CurrentNode.next;
    }
   
    if (l2SavedNext){
     l2SavedNext = l2CurrentNode.next;
    } 
  }

  // need to do the last one that points to null...it should point to the next one in the other list
  return zippedList;

};

// let l1 = new Node(1); 
// l1.next = new Node(2);
// l1.next.next = new Node(3);
// console.log(l1);

// let l2 = new Node('a');
// l2.next = new Node('b');
// l2.next.next = new Node('c');

// let zipped = zip(l1, l2);
// console.log(zipped);
// let currNode = zipped;
// while( currNode ){
//   console.log(currNode.value);
//   currNode = currNode.next;
// }



module.exports = {Node: Node, zip: zip};
