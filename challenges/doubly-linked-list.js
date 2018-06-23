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
  let newTail = Node(val);
  newTail.prev = this.tail;
  this.tail = newTail; 
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let current = this.head;
  while (current.value !== val && current.value !== null) {
    current = current.next
  }
  current.next.prev = current.prev;
  current.prev.next = current.next;  
}

module.exports = LinkedList;

let ll = new LinkedList;
ll.head = new Node(1);
ll.head.next = new Node(2);
ll.head.next.prev = ll.head;
ll.head.next.next = new Node(3);
ll.head.next.next.prev = ll.head.next;
ll.tail = ll.head.next.next;

let current = ll.head
console.log('head:', current)
while (current) {
  console.log("currnet:", current.value)
  current = current.next
}