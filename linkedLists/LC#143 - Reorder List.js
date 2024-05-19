// Leetcode medium - Solved using two pointers (fast/slow) and using the solution for reversing a linked list

/*
  You are given the head of a singly linked-list. The list can be represented as:

  L0 → L1 → … → Ln-1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Example:
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
*/


// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var reorderList = function(head) {
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
  }

  let prev = null
  let curr = slow.next
  let next = null
  while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }
  slow.next = null

  let head1 = head;
  let head2 = prev;
  while (head2) {
      let temp = head1.next;
      head1.next = head2;
      head1 = head2;
      head2 = temp;
  }
};

// This solution has a time complexity of O(n) since we do a full pass only two times of the linked list
// This solution has a space complexity of O(1) since we do not use any additional data structures, only
// a couple of pointers