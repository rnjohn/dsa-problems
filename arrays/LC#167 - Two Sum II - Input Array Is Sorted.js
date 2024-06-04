// Leetcode medium - solution using two pointers (and logic leveraged from the fact that the array is sorted)

/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up 
to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.
*/

var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length;

  while (left < right) {
      let total = numbers[left] + numbers[right];

      if (total == target) {
          return [left + 1, right + 1];
      } else if (total < target) {
          left++;
      } else {
          right--;
      }
  }
};

// This solution has a time complexity of O(n) since in the worst case we will go through every number in the array
// This solution has a space complexity of O(1) since no additional data structure is used