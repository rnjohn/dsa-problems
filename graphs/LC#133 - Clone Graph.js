// Leetcode medium - solution using recursion and map

/*
Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}
 

Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.
*/

var cloneGraph = function(node) {
  let map = new Map();
  return helper(node, map);
};

function helper(node, map) {
  if (!node) return null;

  if (map.has(node)) return map.get(node);

  let newNode = new Node(node.val);
  map.set(node, newNode);

  for (const neighbor of node.neighbors) {
      newNode.neighbors.push(helper(neighbor, map));
  }

  return newNode;
}

// This solution has a time complexity of O(n), n being the amount of nodes present
// This solution has a space complexity of O(n), n being the size of the map (which will contain all nodes)