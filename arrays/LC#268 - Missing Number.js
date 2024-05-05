// Leetcode easy - solution using sum of 0...n and comparing it to the sum of array

// Given an array nums containing n distinct numbers in the range [0, n], return the only 
// number in the range that is missing from the array.

function missingNumber(nums) {
    let expectedSum = 0;
    let actualSum = 0;
    for (let i = 0; i < nums.length; i++) {
        expectedSum += i+1;
        actualSum += nums[i];
    }

    return expectedSum - actualSum;
}

nums = [3,0,1]
console.log(missingNumber(nums)) // 2

// This solution has a time complexity of O(n) since the array is passed through once and a space
// complexity of O(1) since we only use two extra variables only for the solution.


// there is also a solution that uses bit manipulation to solve it

function missingNumberAlt(nums) {
    const n = nums.length;
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans ^= i;
    }
    for (let i = 0; i < nums.length; i++) {
        ans ^= nums[i];
    }
    return ans;
}