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
    let currentNode = head;
    let nextNode = null;
    let previousNode = null;

    while (currentNode != null){
        nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }
    head = previousNode;


}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
