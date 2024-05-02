/**
 * sice we are given a cycled linked list
 * first approach
 * run a check if head is null, if null return false
 * init an empty set
 * run a while loop
 * if head not in the set add to set the move to the next node till head is null
 * if head in set return true
 * else rturn false
 *
 * time complexity would be 0(n) because i need to loop through all the nodes till i get to null
 * space complexity is also 0(n) because a have a set that stores all the nodes
 */

class Node {
  constructor(val, prev, next) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

function hasCycle(head) {
  if (head === null) return false;
  let visited = new Set();
  while (head !== null) {
    if (visited.has(head)) {
      return true;
    }
    visited.add(head);
    head = head.next;
  }
  return false;
}
/**
 * second approach
 * here i would be using two pointer which would be the fast and slow pointer both starting from the head
 * but here the concept is that the fast pointer would go twice ahead of the slow pointer in respect that the fas pointer would have gone round the node and check while slow pointer would be reconfirming the node
 * having done the base check which is that head isnt null
 * init both slow and fast pointer
 * run a while loop which check both fast and fast.next not null
 * slow pointer move a step ahead and fast pointer move twice ahead
 * run a check if fastpointer = slowpointer
 * return true
 * else return false
 */
class Node {
  constructor(val, prev, next) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

function cycle(head) {
  if (head === null) return false;
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
