class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function removeDups(node) {
  const present = [];
  let prev;
  let current = node;
  while(current) {
    if (present.includes(current.data)) {
      prev.next = current.next;
      current.next = null;
      current = prev.next;
    } else {
      present.push(current.data);
      prev = current;
      current = current.next;
    }
  }
  return node;
}

//Time comp: O(n) - n being the length of the linked list
//Space comp: O(n) - n being the length of the linked list

let node = new Node(2);
node.next = new Node(3);
node.next.next = new Node(2);
node.next.next.next = new Node(4);
node.next.next.next.next = new Node(5);

removeDups(node);

while(node) {
  console.log(node.data);
  node = node.next;
}