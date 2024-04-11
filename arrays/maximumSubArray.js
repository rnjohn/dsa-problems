// Leetcode medium - solution using Dynamic Programming

// Given an integer array nums, find the subarray with the largest sum, and return its sum.

function maximumSubArray(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = 0 > nums[i-1] ? nums[i] : nums[i] + nums[i-1];
        if (nums[i] > max) max = nums[i];
    }
    return max;
}

nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maximumSubArray(nums)) // 6


/*
    This problem is a example of what can be solved using dynamic programming. Since we are looking for the subarray that gives us the MAXIMUM
    sum, we can use each position of the input array to store the largest sum of all subarrays ending with index i. Having that, we can subtract
    whatever is left from what we consider would give the maximum sum of all subarrays.
    This solution has a time complexity O(n) since we go through the input array only once.
    This solution has as space complexity of O(1) since we do not use any other additional data structure.
*/