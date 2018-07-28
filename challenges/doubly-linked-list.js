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
  const node = new Node(val)
  if(!this.head){
    this.head = node;
    this.tail = node;
  }
  else{
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;

  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let current = this.head;
  while(current.val !== val){
    current = current.next;
  }
  if(current = this.head){
    current.next.prev = null;
    this.head = current.next;
    current.next = null;
  }
  if(current = this.tail){
    this.tail = current.prev;
    this.tail.next = null;
    current.prev = null;
  }
  else{
  current.prev.next = current.next;
  current.next.prev = current.prev;
  current.prev = null;
  current.next = null;
  }
  
};

module.exports = LinkedList;
