// Leetcode easy - solved using recursion

// Given the root of a binary tree, invert the tree, and return its root.

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
function invertTree(root) {
    if (root == null) return root;

    root.left = invertTree(root.left);
    root.right = invertTree(root.right);

    [root.left, root.right] = [root.right, root.left];
    return root;
}

root = new TreeNode(4)
root.left = new TreeNode(2); root.right = new TreeNode(7);
root.left.left = new TreeNode(1); root.left.right = new TreeNode(3)
root.right.left = new TreeNode(6); root.right.right = new TreeNode(9)

/*
    This algorithm uses recursion to solve the problem, by using recursion we go into each child node of every node and exchange their children.
    This algorithm has a time complexity of O(n) since we go through every node of the tree.
    This algorithm has a space complexity of O(m), m being the number of levels of the tree since that is the deepest level the call stack will go.
*/