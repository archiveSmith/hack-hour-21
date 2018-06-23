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
  const newNode = new Node(val);
  if (this.tail) {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = this.tail.next;
  } else {
    this.tail = newNode;
    this.head = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let currentNode = this.head;
  if (!this.head && !this.tail) return;
  while (currentNode) {
    if (currentNode.val === val) {
      if (currentNode.next) currentNode.next.prev = currentNode.prev;
      // if there's no next, we must be removing the tail
      else this.tail = currentNode.prev;
      if (currentNode.prev) currentNode.prev.next = currentNode.next;
      else this.head = this.head.next;
      break;
    }
    currentNode = currentNode.next;
  }
};

module.exports = LinkedList;
