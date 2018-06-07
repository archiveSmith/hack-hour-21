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
  let leftHeight = 0;
  let rightHeight = 0;
  let balanced = false;
  if (!tree.left && !tree.right) return;
  if (tree.left !== null && tree.right !== null) {
    leftHeight = leftHeight + superbalanced(tree.left);
    rightHeight = rightHeight + superbalanced(tree.right);
  }
  if (leftHeight - rightHeight < 2) {
    if (tree.left || tree.right) {
      balanced = true;
    } else {
      return false;
    }
  }
  else {
    return false;
  }
  return balanced;

  //   if (!tree) return false;
  //   if (tree.left === null && tree.right === null) return true;
  //   let heights = [];
  //   function getChildH(tree, height = 0) {
  //     if (!tree.left && !tree.right) {
  //       heights.push(height);
  //       return;
  //     } else {
  //       if (tree.left) {
  //         getChildH(tree.left, height + 1);
  //       }
  //       if (tree.right) {
  //         getChildH(tree.right, height + 1);
  //       }
  //     }
  //   }
  //   getChildH(tree);
  //   for(let i = 0; i< heights.length; i++){
  //     for(let j = i+1; j< heights.length; j++){
  //       if(Math.abs(heights[j] - heights[i]) > 1 ){
  //           return false;
  //       }
  //     }
  //   }
  //   return true;
}

// const tree = new BinaryTree(5);
// tree.left = new BinaryTree(3);
// tree.left.left = new BinaryTree(2);
// tree.left.left.left = new BinaryTree(1);
// tree.left.right = new BinaryTree(4);
// tree.right = new BinaryTree(6);

// console.log(superbalanced(tree));
module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
