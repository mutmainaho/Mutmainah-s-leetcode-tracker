/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}

  Brute force
  -check length of both string if they are same 
  - sort each of the string
  -if sorted string is same return true else false
TC -> O(nlogn) because of the sorting 
SC-> O(1) which means no extra space was required.

 */

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let sSorted = s.split("").sort().join();
  let tSorted = t.split("").sort().join();

  if (sSorted === tSorted) {
    return true;
  }
  return false;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
optimized soln
-check if both strings are of same length
-create an empty map to store chars seen in string
-run a for loop through s to check for char
-if char not in map store in map else if char in map increament char
-run a for loop through t to check for char
- if char not in the map return false
-else decrement char

TC-O(N): Where n is the length og the string
SC-O(1)
  
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let map = {};

  for (let char of s) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }
  for (let char of t) {
    if (!map[char]) {
      return false;
    } else {
      map[char]--;
    }
  }
  return true;
};
