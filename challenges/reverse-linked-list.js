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


function SinglyList() {
    this._length = 0;
    this.head = null;
}

SinglyList.prototype.add = function(value) {
    console.log(value)
    var node = new Node(value),
        currentNode = this.head;
 
    // 1st use-case: an empty list 
    if (!currentNode) {
        this.head = node;
        this._length++;
         
        return node;
    }
 
    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
 
    currentNode.next = node;
 
    this._length++;
     
    return node;
};
function reverseLinkedList(head, i = 0) {
    const nwHead;
    if (head.next === null){
        return nwHead
    }
    else{
        let current = head;
        while(current.next.next){
            current = current.next
        }
        current.next.next = current;
        if (i === 0) {
            nwHead = current.next.value;
            console.log(nwHead)
        }
        reverseLinkedList(head, i++, nwHead);
    }
}

SinglyList = new SinglyList()

SinglyList.add(3)
SinglyList.add(7)
SinglyList.add(8)
SinglyList.add(9)
SinglyList.add(98)
SinglyList.add(354)

console.log(reverseLinkedList(SinglyList.head));







module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
