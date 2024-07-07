class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
// using stack
/* starting from the root node
 * while stack not empty
 * pop out current node
 * curr.left = curr.right
 * curr.right = curr.left
 * append left node into the stack
 * append right node into the stack;
 * return root
 */
function inverseTree(root) {
  if (!root) return root;
  let stack = [root];
  while (stack.length !== 0) {
    let output = stack.pop();
    let temp = output.left;
    output.left = output.right;
    output.right = temp;
    if (output.left) stack.push(output.left);
    if (output.right) stack.push(output.right);
  }
  return root;
}
// using queue
var invertTree = function (root) {
  if (!root) return root;
  let queue = [root];
  while (queue.length > 0) {
    let output = queue.shift();
    let temp = output.left;
    output.left = output.right;
    output.right = temp;
    if (output.left) queue.push(output.left);
    if (output.right) queue.push(output.right);
  }

  return root;
};
