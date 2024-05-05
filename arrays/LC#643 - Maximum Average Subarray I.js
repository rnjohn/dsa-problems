// Leetcode easy - solution with sliding window

//You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and 
// return this value. Any answer with a calculation error less than 10**(-5) will be accepted.

function findMaxAverage(nums, k) {
    let maxSum = 0;

    for (let i = 0; i < k; i++) {
        maxSum += nums[i];
    }

    let curSum = maxSum

    for (let i = k; i < nums.length; i++) {
        curSum = curSum - nums[i-k] + nums[i];
        if (curSum > maxSum) maxSum = curSum;
    }
    
    return maxSum / k;
}

nums = [1,12,-5,-6,50,3];
k = 4;
console.log(findMaxAverage(nums, k)) //12.75

/*
    This solution first obtains the sum of the first k elements of the array, and then uses a sliding
    window to move a number in each iteration, substracting the element that goes out the window
    (the leftmost one) and adding the new element to the sum. After getting the biggest sum then it
    is divided by k and returned.
    This solution has a time complexity of O(n) since we get the first k elements and then we move n-k
    times more to get to the end of it, making a single pass.
    This solution has a space complexity of O(1) since we do not use any additional data structure,
    just a couple of variables.
*/