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
  //if the first Node, just create it
  if(!this.head && !this.tail){
    let newNode = new Node(val);
    this.head = newNode;
    this.tail = newNode;
  }
  //else, add the node to the linked list (pre set to the tail, then move the tail)
  let nextNode = new Node(val);
  nextNode.prev = this.tail;
  this.tail.next = nextNode;
  this.tail = nextNode;
  
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let newhead = this.head;
  //moving from the head (forward), and moving from the back (backward)
  while(newhead.val !== val && newhead.next !== null){
    newhead = newhead.next;
    // console.log('HERE IS THE NEWHEAD', newhead.val);
  }
    if(newhead.val === val && newhead.prev === null) {
      newhead.next.prev = null;
      this.head = newhead.next;
    }else if (newhead.val === val && newhead.next === null){
      // console.log("IN THE FINAL ELSE IF");
      newhead.prev.next = null;
      this.tail = newhead.prev;
      //when meeting having, stop, and evaluate the index of val of the traversed position
    }
    else if (newhead.val === val){
      // console.log('THIS IS IT');
      newhead.prev.next = newhead.next;
      newhead.next.prev = newhead.prev;
};
};
// let node = new Node(5);
// node.next = new Node(4);
// node.next.prev = node;
// node.next.next = new Node(3);
// node.next.next.prev = node.next;

// let link = new LinkedList();
// link.head = node;
// link.tail = node.next.next;

// link.add(2);
// link.remove(4);
// console.log(link);

module.exports = LinkedList;
