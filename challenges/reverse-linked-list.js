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
    let trace = head;
    let newNode = new Node(head.value);
    newNode.next = null;
    trace = newNode;
    while(trace.next !== null){
        let nextNode = new Node(head.next.value);
        trace = head;
        nextNode.next = trace;
        head = head.next;
        trace = nextNode;
    }
    return trace;



    //use the head of the list
    //when getting to the end

}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
