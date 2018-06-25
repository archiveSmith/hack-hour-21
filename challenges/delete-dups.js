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
 * 
 * input: {object} head points to a linked list 
 * output: {object) head that points to a linked list with its duplicates removed 
 * 3 approach:
 *  1. use two loops
 *  2. sort the linked list, then remove duplicates
 *  3. use hashing (O(n) time complexity- most efficient approach)
 *   
 *  for hashing approach: (https://www.youtube.com/watch?v=PCOhUGbv4EU)
 *   - hashing  = (key, value) 
 *      key = data of a node;
 *      value = 1 (data present) OR 0 (data absent) 
 *   - to traverse through the linked list use p to point to the head of a linked list
 *   - use array to implement the hash table
 *      - key (data of the node) = index of the array
 *      - value = data of the node 1 or 0
 *   - in the beginning, by default, initialize all indices of the array with a value of 0
 *   - 
 * 
 * 
 */



function deleteDups(head) {
  
}

module.exports = deleteDups;
