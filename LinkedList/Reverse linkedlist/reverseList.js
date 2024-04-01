/**
 for this question,it the basic use of a linked list which a list of nodes would be reversed.
 since we have a list of nodes
run a check to see if thier is a head node
  1-2-3-4-5
   -c-t
c=1,t=3 now c=2,t=3 c=3,t=4 c=4,t=5
remember prev = null
now making tem=prev 5
prev = cur

 -first node would be the head node, which would be the current node
 - current node = head;
 -initialize an empty node which would be prev,this node is to basically keep track of the node when the current moves to the next node
 - run a while loop to check if the cur is not null
 -initilize a temp to store the cur.next
 - so the cur.next node would be the prev node for the intention to reverse
 -so prev node = cur node
 -temp node = cur node
 -return prev
 */
class Node {
  constructor(val, prev, next) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

function reverseNode(head) {
  if (!head) return head;
  let cur = head;
  let prev = null;
  while (cur !== null) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
}
