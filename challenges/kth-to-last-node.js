
//  * Write a function that takes two parameters, an integer and the head of a
//  * singly linked list, and returns the VALUE on the kth to last node in the list.
//  *
// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
//  *
//  * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
//  */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
	// this.head = head;
	let arr = [];
	while(head !== null){
		console.log('this is head',head);
		arr.push(head);
		head = head.next;
		console.log('this is the head.next',head);
	
		//console.log(arr);
	}
	return arr[arr.length-2];



}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
