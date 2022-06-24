/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (intervals.length == 0) {
    return [newInterval];
  }

  let i = 0;
  let result = [];

  // Get all intervals which happen before the new intervals and hence these can not be merged
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Initialize mid interval with the new interval's start and end
  let midInterval = [...newInterval];

  // Check the next overlapping intervals and see if the end time of new interval
  // falls in before start time of an existing interval
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    // We merge the intervals
    midInterval = [
      Math.min(...midInterval, ...intervals[i]),
      Math.max(...midInterval, ...intervals[i]),
    ];

    i++;
  }
  // Push the merged interval into the result
  result.push(midInterval);

  // Push the remaining intervals after the merge into the result
  result = result.concat(intervals.slice(i));

  return result;
};