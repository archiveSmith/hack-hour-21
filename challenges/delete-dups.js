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
    let curr = head;
    let buffer =  [];
    while(curr.next !== null){
        if(buffer.includes(curr.next.value)){
            let next = curr.next;
            curr.next = curr.next.next
            next.next = undefined;
        }
        buffer.push(curr.value)
        curr = curr.next;
    }

}



module.exports = deleteDups;
