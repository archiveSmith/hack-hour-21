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

BinaryTree.prototype.insertLeft = function (value) {
  this.left = new BinaryTree(value);
  return this.left;
};

BinaryTree.prototype.insertRight = function (value) {
  this.right = new BinaryTree(value);
  return this.right;
};

function superbalanced(node, depth = 0, depths = []) {
  console.log(`node: ${node}, depth: ${depth}, depths: ${depths}`);
  if (!node.left && !node.right) {
    if (depths.indexOf(depth) < 0) {
      depths.push(depth);

      if (depths.length > 2 || (depths.length === 2 && (Math.abs(depths[0] - depths[1]) > 1))) {
        return false;
      }
    }
  } else {
    return superbalanced(node.left, depth + 1, depths) && superbalanced(node.right, depth + 1, depths);
  }

  return true;
}

module.exports = { BinaryTree, superbalanced };
