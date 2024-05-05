// Leetcode medium - solution with Hashmaps

// You are given an integer array nums and an integer k.

// In one operation, you can pick two numbers from the array whose sum equals k and remove
// them from the array.

// Return the maximum number of operations you can perform on the array.

function maxOperations(nums, k) {
    let map = new Map();
    let ops = 0;

    for (let i = 0; i < nums.length; i++) {
        let complement = k - nums[i];
        if (map.has(complement)) {
            if (map.get(complement) == 1) {
                map.delete(complement);
            } else {
                map.set(complement, map.get(complement) - 1);
            }
            ops++;
        } else {
            if (map.has(nums[i])) {
                map.set(nums[i], map.get(nums[i]) + 1)
            } else {
                map.set(nums[i], 1)
            }
        }
    }

    return ops;
}

nums = [1,2,3,4];
k = 5;
console.log(maxOperations) //2

/*
    In this solution we use a hashmap and the numbers complement. If the hashmap has the complement of
    k - currentNumber, then that complement is erased from the hashmap. If it is not found then we store
    the current number and update its ocurrences.
    This solution has time complexity O(n) since the array is only passed through once, and because the
    operations with hashmaps are also O(1).
    The space complexity of this solution is O(n) since we use a map whose size depends on the input array.
*/