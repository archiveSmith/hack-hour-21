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
  // create a new node
  let newNode = new Node(val);
  
  if (this.length === 0) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    console.log(this);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
  this.length++
  return newNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (!this.head || !val) return;

  if (this.head === val) this.head = val.next;

  if (val.prev !== null) val.next.prev = val.prev;

  if (val.prev !== null) val.prev.next = val.next;
  
  return;
};


let ll = new LinkedList();
ll.head = new Node(5);
ll.tail = ll.head;

ll.add(4);
ll.add(3)

console.log(ll);
ll.remove(4);
console.log(ll);
module.exports = LinkedList;
