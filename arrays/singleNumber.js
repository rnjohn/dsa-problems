// Leetcode easy - solution using XOR operation / bit manipulation

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

function singleNumber(nums) {
    let res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        res ^= nums[i];
    }
    return res;
}

// For this solution, we use the XOR operation to manipulate the bits of the numbers.
// if you do 2 ^ 2 it will give you zero, so in this case we start with the first position of the array
// and start doing the XOR operation with the rest of the array. Since the numbers appear twice, the
// XOR operation will cancel them and only leave the one number that appears once.

// This solution has a time complexity of O(n) since the array is passed through once, and space complexity
// of O(1) since only a single extra variable is used, and is the answer.