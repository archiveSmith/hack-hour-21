/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    let listLength = null;
    let currentHead = head;
    let newHead = null;
    let endOfList = false;
    let values = [];

    while(!endOfList) {
        values.push(currentHead.value);
        currentHead.next === null ? endOfList = true : currentHead = currentHead.next; 
    }
    //values === [5, 7, 9]

    for (let i = values.length - 1; i > 0; i--) {
        newHead = new Node;
        newHead.value = values[i];
        newHead.next = null;
    }
    //loop through values array 


    return newHead;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
