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
    if (!head) return null;
    else if (head.next === null) return head;
    let reverser = head;
    while(reverser.next !== null) {
        reverser = reverser.next;
    }
    let place = head;
    let newHead = reverser;
    while (reverser !== head) {
        if (place.next === reverser) {
            reverser.next = place;
            reverser = reverser.next;
            place = head;
        }
        else {
            place = place.next;
        }
    }
    reverser.next = null;
    return newHead;
}

// let node1 = new Node(1);
// node1.next = new Node(2);
// node1.next.next = new Node(3);
// node1.next.next.next = new Node(4);

// const reversed = reverseLinkedList(node1);
// console.log(reversed.value);
// console.log(reversed.next.value);
// console.log(reversed.next.next.value);
// console.log(reversed.next.next.next.value);



module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
