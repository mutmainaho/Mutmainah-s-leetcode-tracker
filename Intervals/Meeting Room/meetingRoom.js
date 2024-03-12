/**
 * @param {number[][]} intervals
 * @return {boolean}
   - sort the intervals for start and end
   -loop through the intervals
   - run a check if  end > start i.e which means meeting still holding in the room
   return false
   - return true when meeting is done and anoher can begin 

   Time complexity => O(nlogn)
   space complexity => O(1)


 */

var canAttendMeetings = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] > intervals[i + 1][0]) {
      return false;
    }
  }
  return true;
};
