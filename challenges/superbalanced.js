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


function superbalanced(tree) {
  if (!tree) return true;
  if (!tree.left && !tree.right) return true;
  let leftMax = 0;
  let rightMax = 0;
  function heightRecursive(node, h = 1) {
    if (!node.left && !node.right) return h;
    if (node.left) return Math.max(h, heightRecursive(node.left, h + 1));
    if (node.right) return Math.max(h, heightRecursive(node.right, h + 1));
  }
  return Math.abs(heightRecursive(tree.left) - heightRecursive(tree.right)) <= 1;
}

// const tree = new BinaryTree(5);
// tree.left = new BinaryTree(3);
// tree.left.left = new BinaryTree(1);
// tree.left.left.right = new BinaryTree(2);
// tree.right = new BinaryTree(8);

// console.log(superbalanced(tree));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
