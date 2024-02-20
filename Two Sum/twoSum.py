#O(N)
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
      #initialize an empty hashmap
      Map = {} 
      for i, value in enumerate(nums):
        #check if the difference is in the hash map
        if target - value  in Map: 
            return [Map[target- value], i]
        Map[value] = i
        


# O(N^2)
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
      #initialize an empty hashmap
      for i in range(len(nums)):
          for j in range(i+1,len(nums)):
              if nums[j]+nums[i]==target:
                  return [i,j]