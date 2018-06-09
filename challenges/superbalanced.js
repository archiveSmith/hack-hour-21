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
function getHeight(tree) {
  let height = 0;
  // console.log("here is the start of the tree", tree);
  if (tree === null) return 0;
  if (!tree.right && !tree.left) return 1;
  if (tree.left) {
    height = 1 + getHeight(tree.left);
    // console.log(height)
  }
  else if (tree.right) {
    height = 1 + getHeight(tree.right);
    // console.log("here is the right tree height", height);
  }
  return height;
}

function superbalanced(tree) {
  // let balanced = false;
  if (!tree) return true;
  if (!tree.right && !tree.left) return true;
  else {
    if (Math.abs(getHeight(tree.left) - getHeight(tree.right)) < 2) {
      // console.log('DONNEEEEEEEE');
      return (superbalanced(tree.left) && superbalanced(tree.right));
      // console.log("TREEEE", tree);
      
    }
    else {
      return false;
    }
  }



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

const tree = new BinaryTree(5);
tree.left = new BinaryTree(3);
tree.left.left = new BinaryTree(2);
//tree.left.left.left = new BinaryTree(1);
tree.left.right = new BinaryTree(4);
tree.right = new BinaryTree(6);
tree.right.left = new BinaryTree(6);
tree.right.right = new BinaryTree(7);
tree.right.right.right = new BinaryTree(8);
//ree.right.right.right.right = new BinaryTree(9);


console.log(superbalanced(tree));
module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
