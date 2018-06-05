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

// are the linked lists always going to be the same length?

function addLinkedList(l1, l2) {

    let carry = 0;
    let currNode1 = l1;
    let currNode2 = l2;
    let outputNode;
    let currOutputNode;

    let val = currNode1.value + currNode2.value;
    if (val > 9) {
        carry = Math.floor(val / 10);
        val = val % 10;
    }

    outputNode = new Node(val);
    currOutputNode = outputNode;
    currNode1 = currNode1.next;
    currNode2 = currNode2.next;

    while (currNode1 !== null) {
        let val = currNode1.value + currNode2.value;
        if (carry > 0) {
            val = val + carry;
            carry = 0;
        }
        if (val > 9) {
            carry = Math.floor(val / 10);
            val = val % 10;
        }
        currOutputNode.next = new Node(val);
        currOutputNode = currOutputNode.next;

        currNode1 = currNode1.next;
        currNode2 = currNode2.next;
    }

    if (carry > 0) {
        currOutputNode.next = new Node(carry);
    }

    return outputNode;
}

let list1 = new Node(9);
list1.next = new Node(9);
list1.next.next = new Node(9);

let list2 = new Node(9);
list2.next = new Node(9);
list2.next.next = new Node(9);

// console.log(list1);
// console.log(list2);

// console.log(JSON.stringify(addLinkedList(list1, list2)));

module.exports = {Node: Node, addLinkedList: addLinkedList};


