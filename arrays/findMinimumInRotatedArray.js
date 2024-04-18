// Leetcode medium - solution using Binary Search

/*
    Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

    [4,5,6,7,0,1,2] if it was rotated 4 times.
    [0,1,2,4,5,6,7] if it was rotated 7 times.
    Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

    Given the sorted rotated array nums of unique elements, return the minimum element of this array.

    You must write an algorithm that runs in O(log n) time.
*/

function findMin(nums) {
    while (nums.length > 1) {
        let div = Math.ceil(nums.length / 2);
        let firstHalf = nums.slice(0, div);
        let secondHalf = nums.slice(div);
        if (firstHalf[firstHalf.length-1] > secondHalf[secondHalf.length-1]) {
            nums = secondHalf;
        } else {
            nums = firstHalf;
        }
    }
    return nums[0]
}

nums = [4,5,6,7,0,1,2];
console.log(findMin(nums)) // 0

// We could use binary search in this case since the array is sorted (rotated, but sorted)
// This solution has a time complexity of O(log n) since we never go through the entire array, we divide by two in every iteration.
// This solution has a space complexity of O(n) since at the beginning we basically have a copy of the array, but we could also just use the last elements of
// both arrays of every iteration and keep the reduced copy.