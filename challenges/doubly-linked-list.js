/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {

    // grab tail of list
    // point tail.next to new Node
    // point new Node.prev to tail
    // set this.tail to new Node
    let currTail = this.tail;
    let newTail = new Node(val);
    
    currTail.next = newTail;
    newTail.prev = currTail;
    this.tail = newTail;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {

    // iterate through list nodes
    // if no node found return undefined or something
    // if node found 
        // set found.prev to found.next
        // set found.next.prev to found.prev

    let currNode = this.head;

    while (currNode !== null) {
        if (currNode.val === val) {
            currNode.prev.next = currNode.next;
            currNode.next.prev = currNode.prev;
            return;
        }

        currNode = currNode.next;
    }
    return null;
};

module.exports = LinkedList;

