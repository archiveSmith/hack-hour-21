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
  // base case: if we've hit an end, we're good (null never fails the test)
  if (tree === null) return true;
  // compare the values on either side of the tree, checking for bad placement of values
  if (tree.left !== null) {
    if (tree.left.value > tree.value) return false;
  }
  if (tree.right !== null) {
    if (tree.right.value < tree.value) return false;
  }
  // call recursion on the nodes from both sides,
  // ultimately returning true only if both sub trees are valid
  return validBST(tree.left) && validBST(tree.right);
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
