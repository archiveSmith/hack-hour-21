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
// start at the head each successive value into an array
// take the last element in the array and change its next pointer to the second to last element
// repeat until the former head is the new last node
// return the new head

    const nodeArr = [];
    let currNode = head;
    let newHead;

    while (currNode.next !== null) {
        nodeArr.push(currNode);
        currNode = currNode.next;
    }
    
    newHead = currNode;

    while (nodeArr.length > 0) {
        currNode.next = nodeArr.pop();
        currNode = currNode.next;
        if (nodeArr.length === 0) {
            currNode.next = null;
        }
    }

    return newHead;
}

// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');
// 
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// console.log(reverseLinkedList(a));


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};

