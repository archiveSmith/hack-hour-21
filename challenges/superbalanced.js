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


// returns a positive number if balanced.
// returns -1 if NOT BALANCED... so we can just exit out of our loop from our calling function
function treeHeightAndBalanced (tree) {

  if (tree === null) return 0;

  // look at the left branch if there is one
  let leftHeight;
  // console.log(tree.left.value);
  if (tree.left !== null) {
    leftHeight = treeHeightAndBalanced(tree.left);
    if ( leftHeight === -1 ) return -1;
    leftHeight += 1;
  } else {
    leftHeight = 0;
  }
  
  // look at the right height
  let rightHeight;
  if (tree.right) {
    rightHeight = treeHeightAndBalanced(tree.right);
    if (rightHeight === -1) return -1;
    rightHeight += 1;
  } else {
    rightHeight = 0;
  }

  // if it is balanced
  if (Math.abs(leftHeight-rightHeight) <= 1 ) {
    return (leftHeight > rightHeight) ? leftHeight : rightHeight;
  } else {
    return -1;
  }

}

function superbalanced(tree) {
  if ( !tree.left && !tree.right) return true;

  // look at the left branch if there is one
  // console.log(tree.left);
  let leftHeight = treeHeightAndBalanced(tree.left);

  if (leftHeight === -1) return false;
  
  // look at the right height
  let rightHeight = treeHeightAndBalanced(tree.right);
  if (rightHeight === -1) return false;
  

  if (Math.abs(leftHeight-rightHeight) <= 1 ) {
    return true;
  } else {
    return false;
  }

}




let t = new BinaryTree(0);
t.left = new BinaryTree(1);
t.right = new BinaryTree(1);

t.left.left = new BinaryTree(2);
t.left.right = new BinaryTree(2);
t.right.left = new BinaryTree(2);
t.right.right = new BinaryTree(2);

// t.left.left.left = new BinaryTree(3);
// t.left.left.right = new BinaryTree(3);
// console.log(t);

// console.log(superbalanced(t));


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
