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
  // catch nonexistent heads
  let currentNode1 = l1.head.next;
  let currentNode2 = l2.head;
  // stack for values replaced in l1
  let stolenVals = [];
  let l2Expired = false;
  // loop through l1
  while (currentNode1) {
    // store the current value
    stolenVals.push(currentNode1.value);
    // set the current value by using length of stolenVals to control what is changed
    if (stolenVals.length % 2 === 0 || l2Expired) {
      // if even (or l2 is finished), set to last stored l1 value
      currentNode1.value = stolenVals.pop();
    } else {
      // if odd, set to current l2 val
      currentNode1.value = currentNode2.value;
    }
    // move down the l1 list
    currentNode1 = currentNode1.next;
    // move down the l2 list
    currentNode2 = currentNode2.next;
  }
}

zip(l1, l2);

module.exports = {Node: Node, zip: zip};
