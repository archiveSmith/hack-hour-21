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
  let newNode = new Node(val);
  newNode.prev = this.tail;
  
  // If this is the first node added to our list
  if (!this.head) {
    this.head = this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let currFrontNode = this.head;
  let currEndNode = this.tail;

  if (!this.head) { return };

  // takes half the time because we process two nodes per loop
  // Assume value is in there once...so we return as soon as we remove a found node
  while ( currFrontNode !== currEndNode ) {
    
    if ( currFrontNode.val === val ) {
      this.removeNode(currFrontNode);
      return;
    } else {
      currFrontNode = currFrontNode.next;
    }

    if ( currEndNode.val === val ) {
      this.removeNode(currEndNode);
      return;
    } else {
      currEndNode = currEndNode.prev;
    }

  }

  // have to do one more check
  if ( currFrontNode.val === val ) {
    this.removeNode(currFrontNode);
    return;
  }

  return;

};

LinkedList.prototype.removeNode = function(node) {
  // need to check if this is the head or tail...need special processing
  if (this.head === node){
    this.head = node.next;
  }
  if (this.tail === node){
    this.tail = node.prev;
  }

  // Make sure the node's neighbors update their pointers
  // And in effect, removes this node from the list
  if (node.prev) {
    node.prev.next = (node.next) ? node.next : null;
  }

  if (node.next) {
    node.next.prev = (node.prev) ? node.prev : null;
  }

  // for garbage collection...make sure the node that we remove don't point to anything.
  node.prev = null;
  node.next = null;

  return;
}


// let ll = new LinkedList();
// ll.head = ll.tail = new Node(1);
// console.log(ll);


// ll.add(2);
// console.log(ll);

// ll.add(3);
// console.log(ll);


// ll.remove(2);
// console.log(ll);



module.exports = LinkedList;
