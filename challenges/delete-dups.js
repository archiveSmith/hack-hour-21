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
    while(curr){
        buffer.push(curr.value)
        if(buffer.includes(curr.next.value)){
            curr.next = cur.next.next
            curr.next.next = undefined
        }
        
        curr = curr.next;
    }


}



module.exports = deleteDups;
