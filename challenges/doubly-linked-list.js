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
  const addedNode = new Node(val);
  if (this.head === null) {
    this.head = addedNode;
    this.tail = addedNode;
    return;
  }
  addedNode.prev = this.tail;
  this.tail.next = addedNode;
  this.tail = addedNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (this.head.val === val) {
    this.head.next.prev = null;
    this.head = this.head.next;
    return;
  }
  let search = this.head;
  let trail = null;
  while (search && search.next && search.val !== val) {
    if (search.next.val === val) {
      if (search.next === this.tail && search.next.next !== null) this.tail = search.next.next;
      else if (search.next === this.tail && search.next.next === null) this.tail = search; 
      search.next = search.next.next;
      if (search.next) search.next.prev = search;
    }
    trail = search;
    search = search.next;
  }
};

// const node1 = new Node(1);
// const list1 = new LinkedList;
// list1.head = node1;
// const node2 = new Node(2);
// const node3 = new Node(3);
// const node4 = new Node(4);
// const node5 = new Node(5);
// const node6 = new Node(6);
// list1.tail = node6;

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;
// node5.next = node6;

// node2.prev = node1;
// node3.prev = node2;
// node4.prev = node3;
// node5.prev = node4;
// node6.prev = node5;

// list1.add(1);
// list1.add(2);
// list1.remove(1);
// list1.add(3);
// console.log(list1);

module.exports = LinkedList;
