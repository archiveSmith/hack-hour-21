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

function List() {
    this.head = null;
}

List.prototype.add = function(val) {
    if (this.head === null) {
        this.head = new Node(val);
    } else {
        let currNode = this.head;
        
        while (currNode.next !== null) {
            currNode = currNode.next;
        }

        currNode.next = new Node(val);
    }
}

    

function Node(val) {
  this.value = val;
  this.next = null;
}


function kthToLastNode(k, head) {

    if (head === undefined) {
        return undefined;
    }

    const valArr = [head.value];

    while (head.next !== null) {
        head = head.next;
        valArr.push(head.value);
    }

    let i = 1;
    for (let j = valArr.length -1; j >= 0; j -= 1) {
        if (i === k) {
            return valArr[j];
        }
        i += 1;
    }

    return undefined;
}


// let l = new List();
// l.add('A');
// l.add('B');
// l.add('C');
// l.add('D');
// l.add('E');
// 
// let a = l.head;
// 
// console.log(kthToLastNode(5, a));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
