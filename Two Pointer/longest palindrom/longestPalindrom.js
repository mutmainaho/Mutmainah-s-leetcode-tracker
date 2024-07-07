/**
 
Input: s = "abccccdd"
             ^
{a:1,}

initialize map {a:1,b:1,c:4,d:2 }
count = 0
loop through s
store s to map, else increase s in map
check map for even occurence
count increase by even occurence
loop through the values in s
check map for one odd occurence 
count increases by 1
break 
return count

 */

function longestPalindrome(s) {
  let map = {};
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else if (map[s[i]]) {
      map[s[i]]++;
    } else if (map[s[i]] % 2 === 0) {
      count += 2;
    }
  }
  for (const c in map) {
    if (map[c] % 2 === 1) {
      count++;
      break;
    }
  }
  return count;
}
