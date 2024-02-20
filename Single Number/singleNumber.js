/**
 * @param {number[]} nums
 * @return {number}
 *
 * -init a map
 * -run a for loop
 * -check if the number in my map
 *   - if not in map, set in map
 *   - else increament the number
 * - run another for loop for keys
 *   -remeber a map consist of key and value
 *   i.e [1:2,2:1] here key is 1 and value is 2
    -check if key = 1
     if yes return key
 
 */
// O(n^2)
var singleNumber = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }
  for (let key in obj) {
    if (obj[key] === 1) return key;
  }
};
