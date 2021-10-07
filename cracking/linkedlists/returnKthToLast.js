/*
  Implement an algorithm to find the kth to last element of a singly linked list.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//Recursive solution
function returnKthToLast(head, k) {
  let counter = [0];
  let result = solve(head, k, counter);
  return result;
}

function solve(node, k, counter) {
  if (!node) {
    return null;
  }

  let nextNode = solve(node.next, k, counter);
  counter[0] = counter[0] + 1;

  if (counter[0] == k) {
    return node;
  }
  return nextNode;
}

//Time comp: O(n)
//Space comp: O(n)

//Iterative solution
function returnKthToLast(head, k) {
  let p1 = head;
  for (let i = 0; i < k; i++) {
    p1 = p1.next;
  }
  let p2 = head;
  while(p1) {
    p2 = p2.next;
    p1 = p1.next;
  }
  return p2;
}

//Time comp: O(n)
//Space comp: O(1)

/*
  - One way to do it is to traverse the whole list
  to know how long is it, then traverse it until 
  length - k and return that node
*/