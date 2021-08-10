/*
You're given the head of a Singly Linked List whose nodes are in sorted order with
respect to their values. Write a function that returns a modified version of the
Linked List that doesn't contain any nodes with duplicate values. The Linked List
should be modified in place (i.e., you shouldn't create a brand new list), and the
modified Linked List should still have its nodes sorted with respect to their values.

Each LinkedList node has an integer value as well as a next node pointing to the next
node in the list or to None/null if it's the tail of the list.
*/

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicates(linkedList) {
  let head = linkedList;
  let prev = null;
  while (head) {
    if (!prev || prev.value != head.value) {
      prev = head;
      head = head.next;
    } else {
      prev.next = head.next;
      head.next = null;
      head = prev.next;
    }
  }
  return linkedList;
}

// Time comp: O(n) -- because we traverse the linked list just once
// Space comp: O(1) -- we only instantiate two extra LinkedList nodes, no matter the input