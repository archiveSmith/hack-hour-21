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
  if(!head && !tail){
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
  let forward = [];
  let newhead = this.head;
  let backward = [];
  let newtail = this.tail;
  //moving from the head (forward), and moving from the back (backward)
  while(this.newhead !== value){
    if(this.newhead === val && this.newhead.prev === null) {
      this.newhead.next.prev = null;
      break;
  }if (this.newhead === val){
    this.newhead.prev.next = this.newhead.next;
    thiis.newhead.next.prev = this.newhead.prev;
  }else{
    this.newhead = this.newhead.next;
  }
        
  
    
}//when meeting having, stop, and evaluate the index of val of the traversed position
  
};

module.exports = LinkedList;
