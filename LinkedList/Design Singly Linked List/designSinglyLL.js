class Node {
  constructor(val, next, prev) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  //Init the list with a 'dummy' node which makes
  // removing a node from the beginning of list easier.
  constructor() {
    this.head = new Node();
    this.tail = this.head;
  }

  get(index) {
    let node = this.head.next;
    let i = 0;
    while (node) {
      if (i === index) {
        return node.val;
      }
      i++;
      node = node.next;
    }
    return -1;
  }

  insertHead(val) {
    let dummy = new Node(val);
    dummy.next = this.head.next;
    this.head.next = dummy;
    if (!dummy.next) {
      //list empty before insertion
      this.tail = dummy;
    }
  }

  insertTail(val) {
    let node = new Node(val);
    this.tail.next = node;
    this.tail = node;
  }

  remove(index) {
    let i = 0;
    let node = this.head;
    while (i < index && node) {
      //move cur to node before the target node
      i++;
      node = node.next;
    }

    if (node && node.next) {
      //if node is equal to the tail move node to prev node
      if (node.next === this.tail) {
        this.tail = node;
      }
      node.next = node.next.next;
      return true;
    }
    return false;
  }

  getValues() {
    let node = this.head.next;
    let res = [];
    while (node) {
      res.push(node.val);
      node = node.next;
    }
    return res;
  }
}
