// Leetcode - Medium

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.


function rotateArray(nums, k) {
    let len = nums.length;
    for (let i = 0; i < k; i++) {
        let first = nums[len-1];
        for (let j = len - 1; j > 0; j--) {
            nums[j] = nums[j-1];
        }
        nums[0] = first;
    }
}

let arr = [1,2,3,4,5,6,7]
let k = 3
// expected result: [5,6,7,1,2,3,4]
rotateArray(arr, k);
console.log(arr)

// this solution is O(1) in space since the change is done in place but it is O(k*n) in space, since the whole array (length n) is being ran through k times
// this solution works but with a very big input it will get Time Limit Exceeded