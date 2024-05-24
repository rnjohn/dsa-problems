// Leetcode easy - solution using recursion or stack

/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}

var inorderTraversal = function(root) {
  let res = [];
  helper(root, res);
  return res;
};

function helper(root, arr) {
  if (!root) return;
  helper(root.left, arr);
  arr.push(root.val);
  helper(root.right, arr);
}

// This solution is using recursion, and has a time complexity of O(n) since it goes through every node of the tree.
// This solution has a space complexity of O(n), n being the deepest level of the tree.

// This can also be solved iteratively, using a stack:

var inorderTraversalIterative = function(root) {
  let stack = [];
  let res = [];

  while (root || stack.length > 0) {
     if (root) {
      stack.push(root)
      root = root.left;
     } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
     }
  }

  return res;
};

// This solution has a time complexity of O(n), n being the amount of nodes the tree has
// This solution has a space complexity of O(n), n being the deepest level of the tree