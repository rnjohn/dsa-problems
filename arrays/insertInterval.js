// Leetcode medium -

/*
    You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the 
    start and the end of the ith interval and intervals is sorted in ascending order by starti. 
    You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

    Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals 
    still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Note that you don't need to modify intervals in-place. You can make a new array and return it.

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
*/

function insertInterval(intervals, newInterval) {
    let left = [];
    let right = [];

    let start = newInterval[0]
    let end = newInterval[1]

    for (const interval of intervals) {
        if (interval[1] < newInterval[0]) {
            left.push(interval);
            continue;
        }
        if (interval[0] > newInterval[1]) {
            right.push(interval);
            continue;
        }

        let first = interval[0];
        let second = interval[1];

        start = Math.min(start, first);
        end = Math.max(end, second);
    }

    return [...left, [start, end], ...right]
}


intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]]
newInterval = [4,8]
console.log(insertInterval(intervals, newInterval)) // Output: [[1,2],[3,10],[12,16]]

// This solution has a time complexity of O(n) since we go through the entire array
// This solution has a space complexity of O(n) since the spread operator generates a whole copy of the array.
