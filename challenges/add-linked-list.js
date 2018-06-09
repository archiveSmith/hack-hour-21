/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let sllHead;// = new Node(0);

  let nextL1 = l1;
  let nextL2 = l2;

  // console.log(nextL1);
  // console.log(nextL2);

  // handle cases where our inputs are undefined
  if ( !nextL1 && !nextL2 ) return undefined;
  if ( !nextL1 ) return new Node(l2.value);
  if ( !nextL2 ) return new Node(l1.value);

  let digitSum = 0;
  let carry = 0;
  let currSumNode;// = sllHead;
  let nextNode;

  while ( nextL1 || nextL2 ) { // if either still has digits...keep going
    if (currSumNode === undefined) { // this is our first node
      sllHead = new Node(0);
      currSumNode = sllHead;
    } else { // these are subsequent nodes...so link them and set up for addition
      currSumNode.next = new Node(0);
      currSumNode = currSumNode.next;
    }


    // handles the case if one list has more nodes than the other
    let nextL1value = nextL1 ? nextL1.value : 0;
    let nextL2value = nextL2 ? nextL2.value : 0;

    digitSum = nextL1value + nextL2value;
    // console.log(digitSum);
    if (digitSum > 9) {
      carry = 1;
      currSumNode.value = digitSum - 10;
    } else {
      currSumNode.value = digitSum + carry; // add the carry if it has a value
      carry = 0;
    }
    
    // set it up for the next iteration;
    if (nextL1) nextL1 = nextL1.next;

    if (nextL2) nextL2 = nextL2.next;

  }

  // handle edge case if we have a left over carry
  if ( carry === 1 ) {
    currSumNode.next = new Node(1); // there's a carry to take of
  }

  return sllHead;


}

// let l1 = new Node(1);
// l1.next = new Node(3);
// l1.next.next = new Node(3);
// let l2 = new Node(5);
// l2.next = new Node(7);
// l2.next.next = new Node(7);

// console.log( addLinkedList(l1,l2) );


module.exports = {Node: Node, addLinkedList: addLinkedList};
