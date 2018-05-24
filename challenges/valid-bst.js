/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
    if (tree.left === null && tree.right === null) return true;
    if (tree.left >= tree.value || tree.value >= tree.right) return false;
    if (tree.left) return validBST(tree.left) && validBST(tree.right);
    if (tree.right) return validBST(tree.left) && validBST(tree.right);
    return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};

let b = new BinaryTree(5);
b.left = new BinaryTree(4);
b.left.left = 2;
b.left.right = 5;
b.right = 6;
// b.left.right = new BinaryTree(5);
// b.left.right.left = 10;
// b.left.right.right = 6;

console.log(b)
console.log(validBST(b))





