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

BinaryTree.prototype.height = (count = 0) => {
  if(this.left !== null){
    count += 1;
    this.left.height(count);
  }

  if(this.right !== null){
    count += 1;
    this.right.height(count);
  }
  return count


}

function isBalanced(tree) {
  let rightHeight = 0;
  let leftHeight = 0;

  if(tree.right === null) return rightHeight;
  else rightHeight = tree.right.height();

  if (tree.left === null) return leftHeight;
  else leftHeight = tree.left.height();

  return Math.abs(leftHeight - rightHeight) < 1;
}

function superbalanced(tree){
  if(isBalanced(tree.left) && isBalanced(tree.right)){
    return true;
  }
  else return false;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
