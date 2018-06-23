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
    let prev = null;
    let curr = head;
    let next;
    while(curr !== null){
        next = curr.next; 
        curr.next = prev;
        prev = curr;
        curr = next;
       
    }
    head = prev;
    return head;
    // let curr = head;
    // let prev = null;
    // let next;
    // while(curr.value !== null) {
    //     next = curr.head;
    //     curr.next = prev;
    //     curr = next;
    //     prev = curr;
        
    // }
    // head = prev;
    // return head;

}
    //recursively solve the problem by setting the head.next and current
    //linking to the prev, and pointing to the nxt
let list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
console.log(reverseLinkedList(list));



    //use the head of the list
    //when getting to the end

}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
