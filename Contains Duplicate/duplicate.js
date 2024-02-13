/**
 * @param {number[]} nums
 * @return {boolean}
 * first approach 
 - ran a for loop on nums
 - check a val in num
 - ran another for loop that starts from i and have a check if i have sen same val if yes return true
 else return false but time complexity is o(n^2)
 
 optimize soln
 init a set- a set basically stores unique value
 -loop through nums
 -check if val in set if in set return true else add val to set
 - return false.
 */
var containsDuplicate = function (nums) {
  // for( let i=0; i<nums.length; i++){
  //     let dup = nums[i];
  //     for (let j=i+ 1; j<nums.length; j++){
  //         if (dup === nums[j]){
  //             return true
  //         }
  //     }

  // }
  //    return false
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }
  return false;
};
