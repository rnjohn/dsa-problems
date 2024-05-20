// Leetcode easy - solution using recursion

/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
*/


//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var isSameTree = function(p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val != q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

// This solution has a time complexity of O(n), n being the size of the tree/s
// This solution has a space complexity of O(n), n being the farthest node of the tree/s