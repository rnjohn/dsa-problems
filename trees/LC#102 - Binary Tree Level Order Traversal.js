// Leetcode medium - solution using queue and breadth first search

/*
Given the root of a binary tree, return the level order traversal of its nodes' values. 
(i.e., from left to right, level by level).
*/


// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var levelOrder = function(root) {
  if (root == null) return []
  let queue = [root]
  let res = []
  while (queue.length) {
      let len = queue.length;
      let currRes = [];
      for (let i = 0; i < len; i++) {
          let curr = queue.shift()
          currRes.push(curr.val);
          if (curr.left) queue.push(curr.left);
          if (curr.right) queue.push(curr.right);
      }
      res.push(currRes);
  }
  return res;
};

// This solution has a time complexity of O(n), n being the amount of elements of the tree since we do a pass
// through all of them and we use the Array.shift operation which is also O(n) because it moves all elements
// one index
// This solution has a space complexity of O(n), since the answer array also contains all the elements present
// in the tree. And if the answer array does not count, then it would be O(m), m being the amount of nodes
// on the largest level of the tree.