/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
Brute force   TC O(n^2) SC - O(1)
 [2,7,11,15]
 target = 9
  2+7 = 9
  -given a list of number to find a target
  - loop through the numbers starting from the first number
  -have another for loop that start for the i
  -if first number[i] and the other number[j] = target
  - return the index of both numbers

 optimized
  -given a list of number to find a target
  -init a map that stores the numbrer
  - loop through the numbers
  - init complement pair = target - number
  -have a check if the complement pair is in the map
    - return the complement pair, num
  - if not add to the map
  x = target - cur = 9 - 2 = 7
  return x,i

 */
// brute force
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] + nums[i] === target) {
        return [i, j];
      }
    }
  }
}

// optimized soln

function twoSum(num, target) {
  let map = new Map();
  for (let i = 0; i < num.length; i++) {
    let complementPair = target - num[i];
    if (map.has(complementPair)) {
      return [map.get(complementPair), i];
    }
    map.set(num[i], i);
  }
}
