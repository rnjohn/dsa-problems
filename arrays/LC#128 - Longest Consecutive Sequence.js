// Leetcode medium - solution using set

/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
*/

var longestConsecutive = function(nums) {
  let set = new Set();

  for (const num of nums) set.add(num);

  let longest = 0;
  for (const num of set.values()) {
      if (set.has(num+1)) continue;

      let currLong = 1;
      let cursor = num - 1;
      while (set.has(cursor)) {
          cursor--;
          currLong++;
      }

      longest = Math.max(longest, currLong);
  }

  return longest;
};

/*
This solution has a time complexity of O(n), since we do a single pass through the input array, and do a pass
through the Set, ignoring all the elements that have an element +1 bigger than them. This gives us a worst case
of O(2n) and since we ignore the constants it ends up being O(n)

This solution has a space complexity of O(n), since we have an auxiliary set that can be the same size as the
input array. The set is used for the complexity of the search operation (O(1))
*/