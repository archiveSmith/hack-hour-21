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



function deleteDups(head) {

    const buffer = [];
    let currNode = head;
    let prevNode;

    while (currNode.next !== null) {
        if (buffer.includes(currNode.value)) {
            // remove node and route list around it
            currNode = currNode.next;
            prevNode.next = currNode;
        } else {
            buffer.push(currNode.value);
            prevNode = currNode;
            currNode = currNode.next;
        }
    }
}

module.exports = deleteDups;
