/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 
input: 
output:
approach:
how to count each branch?

*/

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTree.prototype.add(value) {
  if (this.value < value) {
    if(this.right) {
      this.right.add(value);
    } else {
      this.right = new BinaryTree(value);
    }
  } else {
    if(this.left) {
      this.left.add(value);
    } else {
      this.left = new BinaryTree(value);
    }
  }
}

function superbalanced(tree) {

}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
