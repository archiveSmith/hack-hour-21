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

const treeArray = [];

function inOrderTraversal(tree) {
  if (tree.left) inOrderTraversal(tree.left);
  treeArray.push(tree.value);
  if (tree.right) inOrderTraversal(tree.right);
}

function validBST(tree) {
  // Guard clauses
  if (tree.left === null && tree.right === null) return true;
  // Populate treeArray with values from inOrderTraversal
  inOrderTraversal(tree);
  console.log(treeArray);
  // Check sorted
  for (let i = 0; i < treeArray.length - 1; i += 1) {
    if (treeArray[i] > treeArray[i + 1]) return false;
  }
  return true;
}

// const tree = new BinaryTree(5);
// tree.left = new BinaryTree(6);
// tree.right = new BinaryTree(7);

// console.log(validBST(tree));

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
