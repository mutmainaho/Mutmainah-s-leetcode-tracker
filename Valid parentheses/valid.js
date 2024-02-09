/* 
to solve this question 
first have a map that stores the valid bracket
then initialize an empty stack
loop through chars in s 
then check if chars in the map when would then be pushed to the stack
now stack is not empty, which would then  run a check if last char in map is same with char if yes pop out of stack
else it false
finally would return empty stack which then mean all parentheses have been paired.


*/

function valid(s) {
  let stack = [];
  let map = { "[": "]", "(": ")", "{": "}" };
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else if (stack.length > 0 && s[i] === map[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}
