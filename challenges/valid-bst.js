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


function validBST_A(tree) {

  // check if left is there
  if (tree.left) {
    console.log(tree.left.value, tree.value);
    if (tree.left.value < tree.value) {
      // still valid
      // walk down left
      validBST(tree.left)
    } else {
      return false;
    }
  } else {
    return;
  }
  
  // check right
  if (tree.right) {
    console.log(tree.right.value, tree.value);
    if (tree.right.value > tree.value) {
      // still valid...
      // walk down right
      validBST(tree.right);
    } else {
      return false;
    }
  } else {
    return;
  }
  
  return true;
  
}


function validBST(tree) {
  
  // let retVal = true;
  // console.log(tree.left, tree.value, tree.right);
  if (tree.left) {
    if ( tree.left.value < tree.value) {
      return validBST(tree.left);
    } else {
      return false;
    }
  }
  
  if (tree.right) {
    if (tree.right.value > tree.value) {
      return validBST(tree.right);
    } else {
      return false;
    }
  }
  
  return true;
}


// make a test tree
let t = new BinaryTree(6);
t.left = new BinaryTree(5);
t.right = new BinaryTree(9);

console.log(t);
t.left.left = new BinaryTree(4);
// t.left.left.left = new BinaryTree(2);

// t.right.left = new BinaryTree(8);
t.right.right = new BinaryTree(1); 

console.log(validBST(t));


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
