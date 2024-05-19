// Leetcode easy - solved using pointer manipulation

/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) {
   let prev = new ListNode(-1, null)
   let curr = prev;
   while (list1 && list2) {
       if (list1.val < list2.val) {
           curr.next = list1;
           list1 = list1.next;
       } else {
           curr.next = list2;
           list2 = list2.next;
       }
       curr = curr.next;
   }
   curr.next = list1 || list2;

   return prev.next;
};

// This solution has a time complexity of O(n+m) n being the length of the list 1 and m being the length of the list 2
// since we only do a single pass through each of the lists
// This solution has a time complexity of O(1) since we only use a single extra dummy ListNode to return the solution