/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function Node(value) {
    this.value = value;
    this.next = null
}


function deleteDups(head) {
    let current = head;
    let temp = head;

    while (current.next !== null) {
        if (temp.value === current.next.value) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
        temp = temp.next;
        current = temp;
    }
}

// let l = new Node (1)
// l.next = new Node (2);
// l.next.next = new Node (2);
// l.next.next.next = new Node (3);

// console.log(l)
// deleteDups(l)
// console.log(l)

module.exports = deleteDups;
