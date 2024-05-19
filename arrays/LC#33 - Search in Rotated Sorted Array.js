// Leetcode medium - solved using modified binary search

/*
  There is an integer array nums sorted in ascending order (with distinct values).

  Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the 
  resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
  For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

  Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

  You must write an algorithm with O(log n) runtime complexity.
*/

var search = function(nums, target) {
  let len = nums.length;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right){
      let middle = Math.floor((left+right)/2);

      if (nums[middle] == target) return middle;

      if (nums[left] <= nums[middle]) {
          if (nums[left] <= target && target <= nums[middle]) {
              right = middle - 1;
          } else {
              left = middle + 1;
          }
      } else {
          if (nums[middle] <= target && target <= nums[right]) {
              left = middle + 1;
          } else {
              right = middle - 1;
          }
      }
  }

  return -1;
};

nums = [4,5,6,7,0,1,2];
target = 0;

console.log(search(nums, target));

// This solution has a time complexity of O(log n) since we do not go through the entire array, but we divide by 2 on each iteration until finding the target or not.
// This solution has a space complexity of O(1) since we do not use any additional data structure and the solution is iterative.