class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        dup = set()
        for i in nums:
            if i in dup:
                return True
            else:
                dup.add(i)
        return False