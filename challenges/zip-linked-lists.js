/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
    // l1.next >> l2
    // l2.next >> l1
    //
    // for the last values of the list:
    // l1.next that points to null will point to last in l2
    // l2.next will point to null

    let newL;

    let currl1 = l1;
    let currl2 = l2;

    while (l2.next !== null) {
        let tempNextl1 = currl1.next;
        let tempNextl2 = currl2.next;

        l1.next = l2;

        l2.next = tempNextl1;
    }

    
};

// temp

module.exports = {Node: Node, zip: zip};
