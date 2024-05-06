// Given an integer array nums, move all 0's to the end of it while maintaining the relative order 
// of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.


function moveZeroes(nums) {
    let left = 0;
    for(let i=0; i<nums.length; i++){
        console.log(nums)
        if(nums[i] !== 0){
            [nums[left], nums[i]] = [nums[i], nums[left]] 
            left++;
        }
    }
    console.log(nums)
}

nums = [0,1,0,3,12];
moveZeroes(nums);

// This solution uses two pointers, one that goes through the array and one that does the same but stops at
// the 0s. The idea is to swap whenever a non-zero number is found since that ordering will keep the relative
// order of the array.

// The time complexity is O(n) since there is only a single pass through the array and the space complexity
// is O(1) since no other data structure is used.

// Example
// [ 0, 1, 0, 3, 12 ]
// [ 0, 1, 0, 3, 12 ]
// [ 1, 0, 0, 3, 12 ]
// [ 1, 0, 0, 3, 12 ]
// [ 1, 3, 0, 0, 12 ]
// [ 1, 3, 12, 0, 0 ]
