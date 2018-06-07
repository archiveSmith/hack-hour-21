/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let carry = false;
  let nums1 = [];
  let nums2 = [];
  let result = [];
  let current;
  
  while (l1) {
    nums1.push(l1.value);
    l1 = l1.next;   
  }
  
  while (l2) {
    nums2.push(l2.value);
    l2 = l2.next;   
  }
  
  let longest = nums1.length > nums2.length ? nums1 : nums2;
  let shortest = nums1 === longest ? nums2 : nums1;
  
  longest.reverse();
  shortest.reverse();
  
  for (let i = 0, sum; i < longest.length; i++) {
    sum = longest[i] + shortest[i];
    if (sum < 10) {
      result.push(carry ? sum + 1 : sum)
      carry = false;
    } else {
      result.push(sum % 10)
      carry = true;
    }
  }
  
  let resultList = new Node(result[0]);
  let first = resultList;
  result.shift();
  
  for (let j = 0; j < result.length; j++) {
    resultList.next = new Node(result[j]);
    resultList = resultList.next;
  }

  return first;
}

l1 = new Node(5);
l1.next = new Node(1);
l1.next.next = new Node(3);

l2 = new Node(5);
l2.next = new Node(1);
l2.next.next = new Node(9);

console.log(addLinkedList(l1, l2)); 


module.exports = {Node: Node, addLinkedList: addLinkedList};
