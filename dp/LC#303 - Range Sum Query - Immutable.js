// Leetcode easy - solution using dynamic programming

// Given an integer array nums, handle multiple queries of the following type:

// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
// Implement the NumArray class:

// NumArray(int[] nums) Initializes the object with the integer array nums.
// int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

var NumArray = function(nums) {
    this.nums = nums;
    this.memoizedSums = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        this.memoizedSums[i] = this.memoizedSums[i-1] + nums[i];
    }
};

NumArray.prototype.sumRange = function(left, right) {
    return this.memoizedSums[right] - this.memoizedSums[left] + this.nums[left];
};


numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

// This is an example of dynamic programming, where the ith result can be built upon previous results (i-1th).
// This solution has a time complexity of O(n) since the nums array is passed through only once and the results are stored in the class
// This solution has a space complexity of O(n) since an additional array is created to store the acumulative sums of the input