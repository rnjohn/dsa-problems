// Leetcode easy - solved using three pointers and manipulating them

/*
  Given the head of a singly linked list, reverse the list, and return the reversed list.
*/

//Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var reverseList = function(head) {
   let prev = null;
   let curr = head;
   let next = null;

   while (curr) {
       next = curr.next;
       curr.next = prev;
       prev = curr;
       curr = next;
   }

   return prev;
};

// This solution has a time complexity of O(n) since we only do a single pass through the linked list
// This solution has a space complexity of O(1) since we only use three aditional extra pointers, no matter the input