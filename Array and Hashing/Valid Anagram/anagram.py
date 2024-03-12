class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
         
        if len(s) != len(t):
            return False

        map={}
        for char in s:
            if char not in map:
                map[char] = 1
            else:
                 map[char] +=1  

            # map[char] = map.get(char,0) + 1
        for char in t:
            if char not in map or map[char]==0:
                return False
            map[char] -= 1
          

        return True
          
        