class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function createNode(value) {
  return {
    value: value,
    next: null,
  };
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  insert(value) {
    this.length++;
    let newNode = createNode(value); // or use new Node(value);
  }
}

let newNode = new Node("World");
console.log(newNode);

newNode.insert("hi");
console.log(newNode);
