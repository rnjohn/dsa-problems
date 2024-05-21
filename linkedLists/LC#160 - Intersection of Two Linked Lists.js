// Leetcode easy - Solution using Set or adding the two lists.

/*
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. 
If the two linked lists have no intersection at all, return null.
*/


//Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var getIntersectionNode = function(headA, headB) {
  let set = new Set();

  while (headA) {
      set.add(headA);
      headA = headA.next;
  }

  while (headB) {
      if (set.has(headB)) return headB;
      headB = headB.next;
  }

  return null;
};

// This solution has a time complexity of O(m+n), m being the length of the first list and n being the length of the second list.
// This solution has a space complexity of O(n), n being the length of the set which contains the node of the first list.

// There is also another solution which has a time complexity of O(m+n) and a space complexity of O(1):

var getIntersectionNode = function(headA, headB) {
  let a = headA;
  let b = headB;

  while(a != b) {
      a = !a ? headB : a.next;
      b = !b ? headA : b.next;
  }

  return a;
};

// This solution adds A to B and also B to A, forming a list where inevitably the two pointers will be the same in the second pass
// They will point to the intersection or they will both be null