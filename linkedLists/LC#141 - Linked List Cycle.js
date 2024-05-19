// Leetcode easy - solution using two pointers (fast/slow)

/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.
*/


//Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var hasCycle = function(head) {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head.next;
  while (slow != fast) {
      if (fast == null || fast.next == null) return false;
      slow = slow.next;
      fast = fast.next.next;
  }

  return true;
};

// This solution has a time complexity of O(n) since we do a single pass through the linked list.
// This solution has a space complexity of O(1) since we use only two extra helper pointers.