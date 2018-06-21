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
LinkedList.prototype.add = function (val) {
  if (!this.head) this.head = this.tail = new Node(val);
  else {
    this.tail.next = new Node(val);
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  let place = this.head;
  while (place !== null && place.val !== val) {
    place = place.next;
  }
  if (place === null) return undefined;
  else if (place === this.head) {
    place.next.prev = null;
    this.head = place.next;
  } else if (place === this.tail) {
    place.prev.next = null;
    this.tail = place.prev;
  } else {
    place.prev.next = place.next;
    place.next.prev = place.prev;
  }
};

// const linker = new LinkedList();
// linker.add(1);
// console.log(linker.tail);
// linker.add(3);
// console.log(linker.tail);
// linker.add(10);
// console.log(linker.tail);
// linker.add(122);
// console.log(linker.tail);
// linker.remove(122);
// console.log(linker.tail);
// linker.remove(1);
// console.log(linker.head);


module.exports = LinkedList;
