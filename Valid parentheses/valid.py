class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        map = {'(':')', '[':']','{':'}'}
        for char in s:
            if char in map:
                stack.append(char)
            elif stack and map[stack[-1]] == char:
                stack.pop()
            else:
                return False
        return len(stack) == 0
        