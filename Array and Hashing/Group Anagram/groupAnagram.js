/**
 * @param {string[]} strs
 * @return {string[][]}
 *  - init a map
 * -then loop through the str
 * -split,sort,join the str to check each letters
 * -if word in map
 *   -get the word in map,
 *  - else set the word in map
 * -loop through key and val in map
 * - return the value
 *
 *
 * Tc - O(n^2) checking 2ru length of the str and map
 * Sc - O(1) constant time
 */

var groupAnagrams = function (strs) {
  let map = new Map();

  for (let i = 0; i < strs.length; i++) {
    let anagram = strs[i].split("").sort().join("");

    if (map.has(anagram)) {
      map.set(anagram, [...map.get(anagram), strs[i]]);
    } else {
      map.set(anagram, [strs[i]]);
    }
  }
  let output = [];
  for (const [key, value] of map) {
    output.push(value);
  }
  return output;
};
