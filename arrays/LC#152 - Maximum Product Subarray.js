// Leetcode medium - solution using dynamic programming, similar to maximumSubArray

// Given an integer array nums, find a subarray that has the largest product, and return the product.

function maximumProductSubArray(nums) {
    let max = nums[0];
    nums[0] = {pos: nums[0], neg: nums[0]};
    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i]
        nums[i] = {}
        let prev = nums[i-1];
        
        let pos = Math.max(curr, curr * prev.pos, curr * prev.neg);
        let neg = Math.min(curr, curr * prev.neg, curr * prev.pos);

        nums[i].pos = pos;
        nums[i].neg = neg;
        if (pos > max) max = pos;
    }
    return max;
}

/*
    This solution is very similar to the one found in maximumSubArray, the difference is that here we also have to save the most
    negative number because if that number is multiplied with another negative number then it can become a positive one.
    This solution has a time complexity of O(n) because we only pass through the array once.
    This solution has a space complexity of O(1) since we only use a couple of extra variables.
*/