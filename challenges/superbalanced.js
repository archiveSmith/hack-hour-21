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
  
  const MIN = (node) => {
    if (node === null) return 0;
    return Math.min(MIN(node.left), MIN(node.right)) + 1; 
  }

  const MAX = (node) => {
    if (node === null) return 0;
    return Math.max(MAX(node.left), MAX(node.right)) + 1; 
  }

  if (tree === null) return undefined;
  return (MAX(tree) - MIN(tree)) <= 1;
}

// let bt = new BinaryTree(10); 
// bt.left = new BinaryTree(9);
// bt.right = new BinaryTree(11);
// bt.left.left = new BinaryTree(8);
// bt.left.right = new BinaryTree(14);
// bt.left.left.left = new BinaryTree(4);

// console.log(superbalanced(bt)) 

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};

