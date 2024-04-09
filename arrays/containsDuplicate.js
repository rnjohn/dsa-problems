// Leetcode easy - solution using a set

// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

function containsDuplicate(nums) {
    let unique = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (unique.has(nums[i])) {
            return true;
        } else {
            unique.add(nums[i]);
        }
    }

    return false;
}

nums = [1,2,3,1]
console.log(containsDuplicate(nums)); // true

nums = [1,2,3,4]
console.log(containsDuplicate(nums)); // false

/*
    This solution uses a set to store unique values, and stores each number if they are not present. If
    a number is present, then it is a duplicate.
    This solution has a time complexity of O(n) since the array is run through once in the worst case.
    This solution has a space complexity of O(n) because of the created set.
*/