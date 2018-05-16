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
    let first = head;
    let current = head;
    let next = current.next;
    let last;
    let newHead;

    while (next.next !== null) {
        current = next;
        next = current.next
    }
    
    head = next; // make the last node the new head
    newHead = next; //make the newHead pointer also the new head

    while (last !== first) {
        last = current; //set last pointer to the second to last node
        current = first; // set current to be the first node, original head again
        next = current.next //set next to be the second node again

        while (current.next !== last) {
            current = next;
            next = current.next
        }

        newHead.next = current //set last to be the new last

    }


}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};

let list = new Node('a');
list.next = new Node('b');
list.next = new Node('c');

console.log(list);