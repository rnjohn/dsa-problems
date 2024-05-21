// Leetcode medium - solution iterating over the linked lists

/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
  let head = new ListNode(null, null);
  let curr = head;

  let remainder = 0;
  while (l1 || l2) {
      let sum = remainder;
      if (l1) {
          sum += l1.val;
          l1 = l1.next;
      }
      if (l2) {
          sum += l2.val;
          l2 = l2.next;
      }
      if (sum > 9) {
          curr.next = new ListNode(sum%10);
          remainder = 1;
      } else {
          curr.next = new ListNode(sum);
          remainder = 0;
      }
      curr = curr.next;
  }

  if (remainder) curr.next = new ListNode(1); 

  return head.next;
};

// This solution has a time complexity of O(n), n being the length of the longest linked list
// This solution has a time complexity of O(n), n being the length of the resulting linked list