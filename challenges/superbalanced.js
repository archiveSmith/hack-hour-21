/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(mainTree) {
  let balanced = true;
  function depth(tree, currDepth) {
    if (!tree) return currDepth;
    const val = tree.value;
    // return whether both trees
    const leftDepth = depth(tree.left, currDepth + 1);
    const rightDepth = depth(tree.right, currDepth + 1);
    let diff = leftDepth - rightDepth;
    if (balanced && (diff > 1 || diff < -1)) balanced = false;
    return Math.max(leftDepth, rightDepth);
  }
  depth(mainTree, 0);
  return balanced;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
