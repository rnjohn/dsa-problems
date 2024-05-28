// Leetcode medium - solution using two pointers (delayed)

/*
  Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/


//Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
  let slow = head;
  let fast = head;
  for (let i = 0; i < n; i++) fast = fast.next;
  if (!fast) return head.next
  while(fast.next) {
      slow = slow.next;
      fast = fast.next;
  }

  slow.next = slow.next.next;
  return head;
}

// This solution has a time complexity of O(n) since only a single pass is done through the list
// This solution has a space complexity of O(1) since only two extra pointers are used and it does not change
// with the input

//////// Other solutions

// brute force, do a single pass through the linked list, know how many nodes are there
// get the index of the node to be eliminated via size - n, do the pass and remove the node
// time comp: O(2n), space comp: O(1);

// improved method, do a recursive pass through the linked list, and keep a counter
// initialized in 0, when that counter reaches n, do the removal of the node

// iterative method, use a stack to get all the nodes, once reached the end then pop every
// node and keep a counter to know which one should be deleted, and then delete it

// best solution, use two pointers and separate them by n, move the rightmost until the end
// and that would leave the left one just before the node to be removed. set left.next to
// left.next.next and that is it.