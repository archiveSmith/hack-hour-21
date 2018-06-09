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
  prev = null;
  curr = null;
  let carry = 0;
  while (l1.value !== null && l2.value !== null){
    let carry = 0;
    let newNode = new Node((l1.value + l2.value)%10);
    prev = newNode;
    curr.next = newNode;
    if(Math.floor(newNode.value / 10 !== 0)){
      carry = Math.floor(newNode.value/10);
    }
    l1 = carry + l1.next;
    l2 = l2.next;
    curr = newNode;
  }
  if(l1.value === null && l2.value === null && carry !== 0){
    let newNode = new Node(carry);
  }
  else if (l1.value === null && carry !== 0){
    
  }


}

module.exports = {Node: Node, addLinkedList: addLinkedList};
