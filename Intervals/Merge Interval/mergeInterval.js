/**
 * @param {number[][]} intervals
 * @return {number[][]}
 -sort intervals in ascending order
 - init an empty result
 -loop through the intervals
 - if res is empty push intervals to the result
 - check last intervals in the result
 - if last interval is >= start interval, last interval would be max of end1 and end2
 - else push interval to result
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [];
  for (let i = 0; i < intervals.length; i++) {
    if (result.length === 0) {
      result.push(intervals[i]);
    } else {
      let end1 = result[result.length - 1][1];
      let start = intervals[i][0];
      let end2 = intervals[i][1];
      if (start <= end1) {
        result[result.length - 1][1] = Math.max(end1, end2);
      } else {
        result.push(intervals[i]);
      }
    }
  }
  return result;
};
