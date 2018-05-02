/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */
//kth to last takes in head. use head to find length of node.
//then, find kth to last by subtracting last node minus k (minus 1).


function Node(val) {
  this.value = val;
  this.next = null;
}

function LinkedList() {
	this.head = null;
	this.tail = null;
  }

  LinkedList.prototype.push = function(val) {
    if (this.head === null){
    var newNode = new Node();
    newNode.val = val;
    this.head = newNode;
    this.tail = newNode;
    }
    else {	
    var nextNode = new Node();
    nextNode.val = val;
    nextNode.next = null;
    this.tail.next = nextNode;
    this.tail = nextNode;
    }
}


function kthToLastNode(k, head) {
  let lastNode = this.tail;
  Object.keys(this);
  return lastNode.length - k - 1;
  


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
