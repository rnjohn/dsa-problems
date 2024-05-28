// Leetcode easy - solution using a stack and then checking recursively

/*
Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure
and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. 
The tree tree could also be considered as a subtree of itself.
*/

var isSubtree = function(root, subRoot) {
  let stack = [root];
  let check = false;
  while(stack.length) {
      let curr = stack.pop();
      curr.left && stack.push(curr.left);
      curr.right && stack.push(curr.right);

      if (curr.val == subRoot.val) {
          check = checkSubtrees(curr, subRoot);
      }
      if (check == true) return check;
  }

  return false;
}

function checkSubtrees(root, subroot) {
  if (!root && !subroot) return true;
  if ((!root && subroot) || root && !subroot) return false;

  if (root.val != subroot.val) return false;
  return checkSubtrees(root.left, subroot.left) && checkSubtrees(root.right, subroot.right);
}

// This solution has a time complexity of O(n+m) n being the nodes of the root tree and m being the nodes of the subroot tree
// This solution has a space complexity of O(n+m) n being the nodes of the root tree that are saved in the stack and m being the depth
// of the subroot tree once it is traversed recursively