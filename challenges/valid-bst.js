/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 

function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
    this.root = null;
};

BinaryTree.prototype.push = function (val) {
  var root = this.root;

  if (!root) {
    this.root = new Node(val);
    return;
  }

  var currentNode = root;
  var newNode = new Node(val);

  while (currentNode) {
    if (val < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        break;
      }
      else {
        currentNode = currentNode.left;
      }
    }
    else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        break;
      }
      else {
        currentNode = currentNode.right;
      }
    }
  }

}


function validBST(tree) {

  let root = tree;

}

module.exports = { BinaryTree: BinaryTree, validBST: validBST };

