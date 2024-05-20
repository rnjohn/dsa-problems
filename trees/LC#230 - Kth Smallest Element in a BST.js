// Leetcode medium - solution using recursion and traversing the tree first through its left nodes

/*
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed)
of all the values of the nodes in the tree.
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var kthSmallest = function(root, k) {
  let stack = [];

  helper(root, stack);

  return stack[k-1];
};

function helper(root, stack){
  if (!root) return;

  helper(root.left, stack);

  stack.push(root.val)

  helper(root.right, stack);
}

// This solution has a time complexity of O(n) since it moves through all the nodes of the tree.
// This solution has a space complexity of O(n) since the array will store the nodes of the tree.